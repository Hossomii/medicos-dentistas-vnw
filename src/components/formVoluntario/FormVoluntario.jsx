import { useState } from "react"
import s from "./formVoluntario.module.scss"
import checkIcon from "../../assets/check-mark.png"

const FormVoluntario = () => {
  const [enviado, setEnviado] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setEnviado(true);
  };

  return (
    <div className={s.FormVoluntarioContainer}>
      {enviado ? (
        <div className={s.mensagemEnviada}>
            <img src={checkIcon} alt="Icone de cadastro bem sucedido" />
            <p>Cadastro realizado com sucesso. Entraremos em contato para mais informações.</p>
        </div>
      ) : (
        <>
          <div className={s.FormTitleContainer}>
            <h2 className={s.FormTitle}>Inscrição para Voluntários</h2>
          </div>

          <form className={s.FormVoluntario} onSubmit={handleSubmit}>
            <fieldset>
              <legend>Dados Pessoais</legend>
              <div className={s.inputsLine1Container}>
                <div className={s.inputsLine1}>
                  <input 
                    type="text" 
                    id="firstName" 
                    name="firstName"
                    required
                    placeholder="Seu Nome *"
                    pattern="^[A-Za-zÀ-ÿ\s]{2,}$"
                    title="Digite apenas letras, mínimo 2 caracteres."
                  />
                </div>

                <div className={s.inputsLine1}>
                  <input 
                    type="email" 
                    id="email" 
                    name="email"
                    required
                    placeholder="Seu Email *"
                    pattern="^[^\s@]+@[^\s@]+\.[^\s@]+$"
                    title="Digite um e-mail válido"
                    autoComplete="email"
                  />
                </div>
              </div>

              <div className={s.inputsLine2}>
                <input 
                  type="tel" 
                  id="phone" 
                  name="phone"
                  required
                  placeholder="Seu telefone *"
                  pattern="^\(?\d{2}\)?\s?\d{4,5}-?\d{4}$"
                  title="Digite um telefone válido"
                  autoComplete="tel"
                />
              </div>
            </fieldset>

            <div>
              <legend>Mensagem Adicional</legend>
              <textarea 
                id="message" 
                name="message" 
                rows="10" 
                placeholder="Conte-nos porque você quer ser voluntário..."
              ></textarea>
            </div>

            <p>Entraremos em contato para mais informações</p>

            <button type="submit">Enviar Inscrição</button>
          </form>
        </>
      )}
    </div>
  );
}

export default FormVoluntario
