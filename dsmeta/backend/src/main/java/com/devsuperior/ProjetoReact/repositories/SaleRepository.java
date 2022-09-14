package com.devsuperior.ProjetoReact.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.devsuperior.ProjetoReact.entities.Sale;

public interface SaleRepository extends JpaRepository<Sale, Long>{
	   
}
