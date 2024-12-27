package backend.domain;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class RequestPassword {
    private long id;
    private String newPassword;
    private String oldPassword;
}
