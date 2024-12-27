package backend.service;

import java.security.SecureRandom;

public class RandomPassword {
    static final String char_lower = "abcdefghijklmnopqrstuvwxyz";
    static final String char_upper = char_lower.toUpperCase();
    static final String number = "0123456789";
    static final String data = char_lower + char_upper + number;
    static  SecureRandom secureRandom = new SecureRandom();
    public static String generateRandomPassword(){
        int length = 8;
        StringBuilder sb = new StringBuilder();
        for(int i =0;i< length;i++){
            int rndCharAt = secureRandom.nextInt(data.length());
            char rndChar = data.charAt(rndCharAt);
            sb.append(rndChar);
        }
        return sb.toString();
    }

}