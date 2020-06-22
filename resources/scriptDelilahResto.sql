-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
-- -----------------------------------------------------
-- Schema delilahdb
-- -----------------------------------------------------
DROP SCHEMA IF EXISTS `delilahdb` ;

-- -----------------------------------------------------
-- Schema delilahdb
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `delilahdb` DEFAULT CHARACTER SET utf8 ;
USE `delilahdb` ;

-- -----------------------------------------------------
-- Table `delilahdb`.`estado`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `delilahdb`.`estado` ;

CREATE TABLE IF NOT EXISTS `delilahdb`.`estado` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `descripcion` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
AUTO_INCREMENT = 3
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `delilahdb`.`usuario`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `delilahdb`.`usuario` ;

CREATE TABLE IF NOT EXISTS `delilahdb`.`usuario` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(200) NOT NULL,
  `apellido` VARCHAR(200) NOT NULL,
  `correo` VARCHAR(200) NOT NULL,
  `login` VARCHAR(200) NOT NULL,
  `contrasena` VARCHAR(200) NOT NULL,
  `telefono` VARCHAR(45) NOT NULL,
  `direccion` VARCHAR(100) NOT NULL,
  `pais` VARCHAR(45) NOT NULL,
  `ciudad` VARCHAR(45) NOT NULL,
  `es_admin` TINYINT NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `delilahdb`.`pedido`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `delilahdb`.`pedido` ;

CREATE TABLE IF NOT EXISTS `delilahdb`.`pedido` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `total_pedido` DECIMAL(10,0) NOT NULL,
  `fecha_creacion` DATETIME NOT NULL,
  `fecha_modificacion` DATETIME NULL DEFAULT NULL,
  `usuario_id` INT NOT NULL,
  `estado_id` INT NOT NULL,
  `forma_pago` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_pedido_usuario_idx` (`usuario_id` ASC) VISIBLE,
  INDEX `fk_pedido_estado_idx` (`estado_id` ASC) VISIBLE,
  CONSTRAINT `fk_Pedido_Estado`
    FOREIGN KEY (`estado_id`)
    REFERENCES `delilahdb`.`estado` (`id`),
  CONSTRAINT `fk_Pedido_Usuario`
    FOREIGN KEY (`usuario_id`)
    REFERENCES `delilahdb`.`usuario` (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `delilahdb`.`producto`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `delilahdb`.`producto` ;

CREATE TABLE IF NOT EXISTS `delilahdb`.`producto` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `descripcion` VARCHAR(100) NOT NULL,
  `precio_unitario` DECIMAL(10,0) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `delilahdb`.`pedido_producto`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `delilahdb`.`pedido_producto` ;

CREATE TABLE IF NOT EXISTS `delilahdb`.`pedido_producto` (
  `pedido_id` INT NOT NULL,
  `producto_id` INT NOT NULL,
  PRIMARY KEY (`pedido_id`, `producto_id`),
  INDEX `fk_pedido_producto_producto_idx` (`producto_id` ASC) INVISIBLE,
  INDEX `fk_pedido_producto_pedido_idx` (`pedido_id` ASC) VISIBLE,
  CONSTRAINT `fk_PedidoProducto_Pedido`
    FOREIGN KEY (`pedido_id`)
    REFERENCES `delilahdb`.`pedido` (`id`),
  CONSTRAINT `fk_PedidoProducto_Producto`
    FOREIGN KEY (`producto_id`)
    REFERENCES `delilahdb`.`producto` (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;

ALTER TABLE estado AUTO_INCREMENT = 1;
INSERT INTO `delilahdb`.`estado` (`descripcion`) VALUES ('Nuevo');
INSERT INTO `delilahdb`.`estado` (`descripcion`) VALUES ('Confirmado');
INSERT INTO `delilahdb`.`estado` (`descripcion`) VALUES ('Preparando');
INSERT INTO `delilahdb`.`estado` (`descripcion`) VALUES ('Enviado');
INSERT INTO `delilahdb`.`estado` (`descripcion`) VALUES ('Cancelado');
INSERT INTO `delilahdb`.`estado` (`descripcion`) VALUES ('Entregado');

INSERT INTO `delilahdb`.`usuario`
(`nombre`,
`apellido`,
`correo`,
`login`,
`contrasena`,
`telefono`,
`direccion`,
`pais`,
`ciudad`,
`es_admin`)
VALUES
(
	"Tom",
	"Nook",
	"tomnook@gmail.com",
	"TomNook",
	"animal123",
	"123456",
	"cra 12 no 11-10",
	"Animal Crossing",
	"Cayo Fauno",
	true), (
    "Isabelle",
	"Nooky",
	"isabelle@gmail.com",
	"IsabelleCanela",
	"animal123",
	"123456",
	"cra 12 no 11-10",
	"Animal Crossing",
	"Cayo Fauno",
    false
    ); 


