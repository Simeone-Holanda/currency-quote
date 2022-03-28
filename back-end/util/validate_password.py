from passlib.hash import bcrypt


def hash_password(plaintext_password: str):
    hash = bcrypt.hash(plaintext_password)
    return hash


def validate_password(plaintext_password: str, password_crypt):
    return bcrypt.verify(plaintext_password, password_crypt)


senha = hash_password('simeone')

print(validate_password('simeone', senha))
