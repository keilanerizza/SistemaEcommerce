package repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import domain.Estudante;

@Repository
public interface EstudanteRepository extends JpaRepository<Estudante,Integer>{
	

}

