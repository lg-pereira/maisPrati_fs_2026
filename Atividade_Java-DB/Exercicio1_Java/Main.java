import config.ConfigBiblioteca;
import model.Aluno;
import model.DVD;
import model.Livro;
import model.Professor;
import model.Revista;
import model.Usuario;
import service.Biblioteca;

/**
 * EXERCÍCIO 1 — Sistema de Biblioteca em Java (POO)
 * Arquivo Principal (na raiz de Exercicio1_Java, fora das subpastas).
 *
 * Estrutura de pacotes:
 * - `model/`   -> ItemBiblioteca, Livro, Revista, DVD, Usuario, Aluno, Professor
 * - `service/` -> Biblioteca
 * - `config/`  -> TipoItem, TipoUsuario, ConfigBiblioteca
 * - `Main.java` (raiz)
 *
 * COMO COMPILAR E EXECUTAR NO TERMINAL (a partir de Exercicio1_Java):
 *   javac Main.java
 *   java Main
 */
public class Main {

    public static void main(String[] args) {
        System.out.println("=== INICIANDO " + ConfigBiblioteca.NOME_BIBLIOTECA.toUpperCase() + " ===\n");

        // 1. Instancia a Biblioteca usando as capacidades padrão configuradas em ConfigBiblioteca
        Biblioteca biblioteca = new Biblioteca();

        // 2. Cadastro de Itens no Acervo (Livros, Revistas e a categoria extra DVD da Dica 10)
        System.out.println("--- 1. CADASTRANDO ITENS NO ACERVO ---");
        biblioteca.cadastrarItem(new Livro("LIV-001", "Dom Casmurro", "Machado de Assis"));
        biblioteca.cadastrarItem(new Livro("LIV-002", "Código Limpo (Clean Code)", "Robert C. Martin"));
        biblioteca.cadastrarItem(new Livro("LIV-003", "Java Efetivo", "Joshua Bloch"));
        biblioteca.cadastrarItem(new Revista("REV-001", "Superinteressante", 450));
        biblioteca.cadastrarItem(new Revista("REV-002", "Pesquisa FAPESP", 332));
        // Dica 10: Testando uma categoria nova (DVD) sem alterar nenhum método já escrito em Biblioteca
        biblioteca.cadastrarItem(new DVD("DVD-001", "Interestelar (Edição Especial)", 169));

        // 3. Cadastro de Usuários (Aluno: limite 3 | Professor: limite 5)
        System.out.println("\n--- 2. CADASTRANDO USUÁRIOS ---");
        Usuario alunoJoao = new Aluno("João Silva");
        Usuario profMaria = new Professor("Profa. Maria Souza");

        biblioteca.cadastrarUsuario(alunoJoao);
        biblioteca.cadastrarUsuario(profMaria);

        // Exibe o acervo inicial (todos disponíveis)
        biblioteca.listarAcervo();

        // 4. Cenário de Empréstimos:
        //    João (Aluno) pode ter até 3 itens simultâneos. Vamos emprestar 3 itens e tentar o 4º!
        System.out.println("--- 3. CENÁRIO DE EMPRÉSTIMOS (SUCESSO E RECUSA POR LIMITE) ---");
        biblioteca.emprestar("LIV-001", alunoJoao); // 1º item do aluno (Sucesso)
        biblioteca.emprestar("REV-001", alunoJoao); // 2º item do aluno (Sucesso)
        biblioteca.emprestar("DVD-001", alunoJoao); // 3º item do aluno (Sucesso - atingiu limite 3/3)

        // Tentativa do 4º empréstimo simultâneo para o Aluno -> DEVE SER RECUSADO!
        biblioteca.emprestar("LIV-002", alunoJoao);

        // Já a Professora Maria possui limite de 5 itens e consegue pegar o LIV-002 normalmente
        biblioteca.emprestar("LIV-002", profMaria);

        // Listagem do acervo mostrando os itens que agora estão "Emprestado"
        biblioteca.listarAcervo();

        // 5. Cenário de Devoluções com Cálculo Automático de Multa:
        //    - Livro: prazo 14 dias, multa R$ 0,50/dia
        //    - Revista: prazo 7 dias, multa R$ 1,00/dia
        //    - DVD: prazo 3 dias, multa R$ 2,00/dia
        System.out.println("--- 4. CENÁRIO DE DEVOLUÇÕES E CÁLCULO DE MULTAS ---");

        // Devolução dentro do prazo (Livro ficou 10 dias; prazo é 14 -> Multa R$ 0,00)
        biblioteca.devolver("LIV-001", alunoJoao, 10);

        // Devolução com atraso de Revista (ficou 12 dias; prazo é 7 -> 5 dias de atraso x R$ 1,00 = R$ 5,00)
        biblioteca.devolver("REV-001", alunoJoao, 12);

        // Devolução com atraso de Livro (ficou 18 dias; prazo é 14 -> 4 dias de atraso x R$ 0,50 = R$ 2,00)
        biblioteca.devolver("LIV-002", profMaria, 18);

        // Agora que o Aluno João devolveu itens (está com 1/3), ele pode emprestar novamente!
        System.out.println("\n--- 5. NOVO EMPRÉSTIMO APÓS LIBERAÇÃO DO LIMITE ---");
        biblioteca.emprestar("LIV-003", alunoJoao);

        // Listagem final do acervo para conferência
        biblioteca.listarAcervo();
    }
}
