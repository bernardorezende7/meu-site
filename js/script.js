// ---------- Validação do formulário ----------
function validarFormulario() {
    const nome = document.getElementById("nome").value.trim();
    const email = document.getElementById("email").value.trim();
    const idade = document.getElementById("idade").value.trim();
    const mensagem = document.getElementById("mensagem").value.trim();

    if (nome.length <= 2) {
        alert("O nome deve ter pelo menos 3 caracteres.");
        return false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert("Digite um e-mail válido.");
        return false;
    }

    if (idade < 1 || idade > 120) {
        alert("Digite uma idade válida.");
        return false;
    }

    if (mensagem.length < 10) {
        alert("A mensagem deve ter pelo menos 10 caracteres.");
        return false;
    }

    return true; // permite o envio
}

// ---------- Exibir dados na página formAction.html ----------
function mostrarDadosEnviados() {
    const params = new URLSearchParams(window.location.search);

    // Se não houver parâmetros, não faz nada
    if (!params.toString()) return;

    const nome = params.get("nome");
    const email = params.get("email");
    const idade = params.get("idade");
    const mensagem = params.get("mensagem");

    const divDados = document.getElementById("dados");

    if (divDados) {
        divDados.innerHTML = `
            <p><strong>Nome:</strong> ${nome}</p>
            <p><strong>E-mail:</strong> ${email}</p>
            <p><strong>Idade:</strong> ${idade}</p>
            <p><strong>Mensagem:</strong> ${mensagem}</p>
            <br>
            <a href="form.html" class="botao-voltar">Voltar ao formulário</a>
        `;
    }
}

// Garante que a função rode quando a página de resultados carregar
document.addEventListener("DOMContentLoaded", mostrarDadosEnviados);
