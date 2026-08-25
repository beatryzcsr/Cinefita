import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { FiAlertCircle, FiCheckCircle, FiSend,} from "react-icons/fi";
import { z } from "zod";

const styles = {
  pageContainer: "min-h-screen bg-slate-100 px-4 py-8 text-slate-900",
  card: "mx-auto max-w-4xl rounded-xl bg-white p-6 shadow-lg sm:p-8",
  header: "mb-8 border-b border-slate-200 pb-5",
  headerLeft: "flex items-start gap-4",
  iconBadge: "mt-1 h-3 w-3 shrink-0 rounded-full bg-emerald-500",
  titleRow: "flex items-center gap-2",
  title: "text-2xl font-bold tracking-tight sm:text-3xl",
  subtitle: "mt-2 text-sm text-slate-600",
  form: "space-y-8",
  grid: "grid gap-5 sm:grid-cols-2",
  fieldGroup: "space-y-2",
  labelRow: "flex items-baseline justify-between gap-3",
  label: "text-sm font-semibold text-slate-800",
  required: "text-red-600",
  ruleHint: "text-xs text-slate-500",
  input: "w-full rounded-lg border border-slate-300 bg-white px-3 py-2.5 text-sm outline-none transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200",
  inputError: "border-red-500 focus:border-red-500 focus:ring-red-200",
  errorText: "flex items-center gap-1 text-xs text-red-600",
  radioGroup: "flex gap-5 pt-2",
  radioLabel: "flex items-center gap-2 text-sm text-slate-700",
  radioInput: "accent-emerald-600",
  checkboxGroup: "space-y-3 sm:col-span-2",
  checkboxLabel: "flex items-start gap-2 text-sm text-slate-700",
  checkboxInput: "mt-0.5 accent-emerald-600",
  checkboxSubLabel: "text-slate-600",
  footer: "flex flex-col gap-4 border-t border-slate-200 pt-5 sm:flex-row sm:items-center sm:justify-between",
  footerInfo: "text-sm text-slate-600",
  successBadge: "flex items-center gap-2 font-medium text-emerald-700",
  footerButtons: "flex justify-end gap-3",
  btnJson: "rounded-lg border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50",
  btnSubmit: "inline-flex items-center justify-center gap-2 rounded-lg bg-emerald-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-emerald-700 disabled:cursor-not-allowed disabled:opacity-60",
  spinner: "h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent",
};

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
  

  const {
    register,
    handleSubmit,
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
                {...register("filmeName")}
                className={`${styles.input} ${errors.filmeName ? styles.inputError : ""}`}
              />
              {errors.filmeName && (
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