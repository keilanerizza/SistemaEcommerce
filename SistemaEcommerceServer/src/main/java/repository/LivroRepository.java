package repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import domain.Livro;

@Repository
public interface LivroRepository extends JpaRepository<Livro,Integer>{
	

}

