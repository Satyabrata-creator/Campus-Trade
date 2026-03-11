set shell := ["bash", "-cu"]

encrypt:
    gpg --symmetric --cipher-algo AES256 \
        --batch --yes --pinentry-mode loopback \
        --passphrase "$PASSPHRASE" \
        -o .env.gpg .env

decrypt:
    gpg --decrypt \
        --batch --yes --pinentry-mode loopback \
        --passphrase "$PASSPHRASE" \
        -o .env .env.gpg