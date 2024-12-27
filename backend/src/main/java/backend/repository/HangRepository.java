package backend.repository;

import backend.domain.Hang;
import org.springframework.data.jpa.repository.JpaRepository;

public interface HangRepository extends JpaRepository<Hang,Long > {
}
