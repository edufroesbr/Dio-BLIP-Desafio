# herois.py

# -------- 1) Função de classificação --------
def classificar_nivel(xp: int) -> str:
    if xp < 1000:
        return "Ferro"
    elif 1001 <= xp <= 2000:
        return "Bronze"
    elif 2001 <= xp <= 5000:
        return "Prata"
    elif 5001 <= xp <= 7000:
        return "Ouro"
    elif 7001 <= xp <= 8000:
        return "Platina"
    elif 8001 <= xp <= 9000:
        return "Ascendente"
    elif 9001 <= xp <= 10000:
        return "Imortal"
    elif xp >= 10001:
        return "Radiante"
    # Observação: 1000 é tratado como "Ferro" conforme a primeira condição.
    return "Indefinido"

# -------- 2) Loop para múltiplos heróis --------
print("Cadastro de Heróis (pressione ENTER no nome para encerrar)\n")
while True:
    nome = input("Nome do herói: ").strip()
    if not nome:
        print("\nEncerrado.")
        break
    try:
        xp = int(input("XP do herói (número): ").strip())
    except ValueError:
        print("XP inválido. Tente novamente.\n")
        continue

    nivel = classificar_nivel(xp)
    print(f"O Herói de nome {nome} está no nível de {nivel}\n")

# -------- 3) Exemplo de uso isolado --------
# nome = "Artemis"
# xp = 8420
# print(f"O Herói de nome {nome} está no nível de {classificar_nivel(xp)}")