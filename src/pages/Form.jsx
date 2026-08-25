import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { FiAlertCircle, FiCheckCircle, FiSend,} from "react-icons/fi";
import { z } from "zod";

export const formSchema = z
  .object({
    // Texto com limite de caracteres
    fullName: z
      .string()
      .trim()
      .min(3, "Mínimo de 3 caracteres")
      .max(60, "Máximo de 60 caracteres"),

 filmeName: z
      .string()
      .trim()
      .min(3, "Mínimo de 3 caracteres")
      .max(100, "Máximo de 100 caracteres"),
    // E-mail válido
    email: z
      .string()
      .trim()
      .min(1, "E-mail obrigatório")
      .email("Formato de e-mail inválido"),

    // Telefone com regex
    phone: z
      .string()
      .regex(/^\(?\d{2}\)?\s?\d{4,5}-?\d{4}$/, "Formato: (11) 99999-9999"),

    // Data de nascimento no passado
    birthDate: z
      .string()
      .min(1, "Data obrigatória")
      .refine(
        (date) => {
          const parsed = new Date(date);
          return !isNaN(parsed.getTime()) && parsed < new Date();
        },
        { message: "A data deve ser no passado" }
      ),

  

    // Radio com Enum
    workModel: z.enum(["Comprar", "Alugar"], {
      errorMap: () => ({ message: "Selecione o que deseja " }),
    }),

    // Senha com validação de segurança
    password: z
      .string()
      .min(8, "Mínimo 8 caracteres")
      .regex(/[A-Z]/, "Exige ao menos 1 maiúscula")
      .regex(/[0-9]/, "Exige ao menos 1 número")
      .regex(/[\W_]/, "Exige 1 caractere especial"),

    // Confirmação de senha
    confirmPassword: z.string().min(1, "Confirme a senha"),

    // Checkbox obrigatório
    acceptTerms: z.boolean().refine((val) => val === true, {
      message: "Você deve aceitar os termos",
    }),

    // Checkbox opcional
    newsletter: z.boolean().default(false),
  })
  // Validação cruzada (Confirmação de Senha)
  .refine((data) => data.password === data.confirmPassword, {
    message: "As senhas não coincidem",
    path: ["confirmPassword"],
  });


export const ZodShowcaseForm = () => {
  const [validatedPayload, setValidatedPayload] = useState(null);
  const [showJsonModal, setShowJsonModal] = useState(false);
  const [copied, setCopied] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(formSchema),
    mode: "onBlur",
    defaultValues: {
      fullName: "",
      filmeName: "",
      email: "",
      phone: "",
      portfolioUrl: "",
      birthDate: "",
      workModel: "Alugar",
      password: "",
      confirmPassword: "",
      acceptTerms: false,
      newsletter: true,
    },
  });

  const onSubmit = async (data) => {
    // Simula validação assíncrona
    await new Promise((resolve) => setTimeout(resolve, 600));
    setValidatedPayload(data);
    setShowJsonModal(true);
  };

  return (
    <div className={styles.pageContainer}>
      {/* CARD PRINCIPAL */}
      <div className={styles.card}>
        
        {/* CABEÇALHO */}
        <div className={styles.header}>
          <div className={styles.headerLeft}>
            <div className={styles.iconBadge}>
            </div>
            <div>
              <div className={styles.titleRow}>
                <h1 className={styles.title}>
                  Formulário de Compra
                </h1>
              </div>
              <p className={styles.subtitle}>
                Preencha o formulario e resceba as informações da compra 
              </p>
            </div>
          </div>
        </div>

        {/* FORMULÁRIO EM GRID COMPACTO */}
        <form onSubmit={handleSubmit(onSubmit)} className={styles.form} noValidate>
          <div className={styles.grid}>
            
            {/* 1. Nome Completo */}
            <div className={styles.fieldGroup}>
              <div className={styles.labelRow}>
                <label className={styles.label}>
                  Nome Completo <span className={styles.required}>*</span>
                </label>
                <span className={styles.ruleHint}>min(3), max(60)</span>
              </div>
              <input
                type="text"
                placeholder="Ex: Seu nome aqui"
                {...register("fullName")}
                className={`${styles.input} ${errors.fullName ? styles.inputError : ""}`}
              />
              {errors.fullName && (
                <p className={styles.errorText}>
                  <FiAlertCircle /> {errors.fullName.message}
                </p>
              )}
            </div>

              {/* 2. Nome Filme */}
            <div className={styles.fieldGroup}>
              <div className={styles.labelRow}>
                <label className={styles.label}>
                  Nome do Filme <span className={styles.required}>*</span>
                </label>
                <span className={styles.ruleHint}>min(3), max(100)</span>
              </div>
              <input
                type="text"
                placeholder="Ex: Rei leão"
                {...register("fullName")}
                className={`${styles.input} ${errors.filmeName ? styles.inputError : ""}`}
              />
              {errors.fullName && (
                <p className={styles.errorText}>
                  <FiAlertCircle /> {errors.filmeName.message}
                </p>
              )}
            </div>

            {/* 3. E-mail */}
            <div className={styles.fieldGroup}>
              <div className={styles.labelRow}>
                <label className={styles.label}>
                  E-mail Corporativo <span className={styles.required}>*</span>
                </label>
                <span className={styles.ruleHint}>z.string().email()</span>
              </div>
              <input
                type="email"
                placeholder="seu.email@aqui.com"
                {...register("email")}
                className={`${styles.input} ${errors.email ? styles.inputError : ""}`}
              />
              {errors.email && (
                <p className={styles.errorText}>
                  <FiAlertCircle /> {errors.email.message}
                </p>
              )}
            </div>

            {/* 4. Telefone */}
            <div className={styles.fieldGroup}>
              <div className={styles.labelRow}>
                <label className={styles.label}>
                  Telefone / WhatsApp <span className={styles.required}>*</span>
                </label>
                <span className={styles.ruleHint}>z.regex()</span>
              </div>
              <input
                type="text"
                placeholder="(11) 98765-4321"
                {...register("phone")}
                className={`${styles.input} ${errors.phone ? styles.inputError : ""}`}
              />
              {errors.phone && (
                <p className={styles.errorText}>
                  <FiAlertCircle /> {errors.phone.message}
                </p>
              )}
            </div>


            {/* 5. Data de Nascimento */}
            <div className={styles.fieldGroup}>
              <div className={styles.labelRow}>
                <label className={styles.label}>
                  Data de Nascimento <span className={styles.required}>*</span>
                </label>
                <span className={styles.ruleHint}>.refine(passado)</span>
              </div>
              <input
                type="date"
                {...register("birthDate")}
                className={`${styles.input} ${errors.birthDate ? styles.inputError : ""}`}
              />
              {errors.birthDate && (
                <p className={styles.errorText}>
                  <FiAlertCircle /> {errors.birthDate.message}
                </p>
              )}
            </div>

            {/* 6. Modalidade (Radio) */}
            <div className={styles.fieldGroup}>
              <div className={styles.labelRow}>
                <label className={styles.label}>
                  Modalidade <span className={styles.required}>*</span>
                </label>
                <span className={styles.ruleHint}>Radio Group</span>
              </div>
              <div className={styles.radioGroup}>
                {[
                  { id: "Alugar", label: "Alugar" },
                  { id: "Comprar", label: "Comprar" },
                ].map((item) => (
                  <label key={item.id} className={styles.radioLabel}>
                    <input
                      type="radio"
                      value={item.id}
                      {...register("workModel")}
                      className={styles.radioInput}
                    />
                    {item.label}
                  </label>
                ))}
              </div>
              {errors.workModel && (
                <p className={styles.errorText}>
                  <FiAlertCircle /> {errors.workModel.message}
                </p>
              )}
            </div>

            {/* 7. Senha */}
            <div className={styles.fieldGroup}>
              <div className={styles.labelRow}>
                <label className={styles.label}>
                  Senha <span className={styles.required}>*</span>
                </label>
                <span className={styles.ruleHint}>A-Z, 0-9, #!$</span>
              </div>
              <input
                type="password"
                placeholder="Ex: Flor@2026"
                {...register("password")}
                className={`${styles.input} ${errors.password ? styles.inputError : ""}`}
              />
              {errors.password && (
                <p className={styles.errorText}>
                  <FiAlertCircle /> {errors.password.message}
                </p>
              )}
            </div>

            {/* 8. Confirmar Senha */}
            <div className={styles.fieldGroup}>
              <div className={styles.labelRow}>
                <label className={styles.label}>
                  Confirmar Senha <span className={styles.required}>*</span>
                </label>
                <span className={styles.ruleHint}>.refine(match)</span>
              </div>
              <input
                type="password"
                placeholder="Repita sua senha"
                {...register("confirmPassword")}
                className={`${styles.input} ${errors.confirmPassword ? styles.inputError : ""}`}
              />
              {errors.confirmPassword && (
                <p className={styles.errorText}>
                  <FiAlertCircle /> {errors.confirmPassword.message}
                </p>
              )}
            </div>

            {/* 9. Checkboxes */}
            <div className={styles.checkboxGroup}>
              <label className={styles.checkboxLabel}>
                <input
                  type="checkbox"
                  {...register("acceptTerms")}
                  className={styles.checkboxInput}
                />
                <span>
                  Aceito os termos e políticas <span className={styles.required}>*</span>
                </span>
              </label>
              {errors.acceptTerms && (
                <p className={styles.errorText}>
                  <FiAlertCircle /> {errors.acceptTerms.message}
                </p>
              )}

              <label className={styles.checkboxLabel}>
                <input
                  type="checkbox"
                  {...register("newsletter")}
                  className={styles.checkboxInput}
                />
                <span className={styles.checkboxSubLabel}>
                  Receber oportunidades por e-mail
                </span>
              </label>
            </div>

          </div>

          {/* BARRA INFERIOR DE AÇÕES */}
          <div className={styles.footer}>
            <div className={styles.footerInfo}>
              {validatedPayload ? (
                <span className={styles.successBadge}>
                  <FiCheckCircle /> Filme reservado, aguarde proximas atualizações
                </span>
              ) : (
                <span>Obrigada por alugar conosco! </span>
              )}
            </div>

            <div className={styles.footerButtons}>
              {validatedPayload && (
                <button
                  type="button"
                  onClick={() => setShowJsonModal(true)}
                  className={styles.btnJson}
                >
                </button>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className={styles.btnSubmit}
              >
                {isSubmitting ? (
                  <>
                    <span className={styles.spinner} />
                    Carregando...
                  </>
                ) : (
                  <>
                    <FiSend /> Finalizar
                  </>
                )}
              </button>
            </div>
          </div>
        </form>

      </div>
    </div>
  );
};



export default ZodShowcaseForm;

