import * as React from 'react'
import {
  Body, Container, Head, Heading, Html, Preview, Section, Text, Hr,
} from '@react-email/components'
import type { TemplateEntry } from './registry'

const SITE_NAME = 'GS'

interface FormNotificationProps {
  formType?: string
  submittedAt?: string
  fields?: Array<{ label: string; value: string }>
}

const FormNotificationEmail = ({
  formType = 'Formulário',
  submittedAt,
  fields = [],
}: FormNotificationProps) => (
  <Html lang="pt-BR" dir="ltr">
    <Head />
    <Preview>{`Nova submissão: ${formType}`}</Preview>
    <Body style={main}>
      <Container style={container}>
        <Heading style={h1}>Nova submissão recebida</Heading>
        <Text style={subtitle}>
          {formType}
          {submittedAt ? ` • ${submittedAt}` : ''}
        </Text>
        <Hr style={hr} />
        <Section>
          {fields.map((f, i) => (
            <Section key={i} style={{ marginBottom: '14px' }}>
              <Text style={label}>{f.label}</Text>
              <Text style={value}>{f.value || '—'}</Text>
            </Section>
          ))}
        </Section>
        <Hr style={hr} />
        <Text style={footer}>Enviado automaticamente pelo site {SITE_NAME}.</Text>
      </Container>
    </Body>
  </Html>
)

export const template = {
  component: FormNotificationEmail,
  subject: (data: Record<string, any>) =>
    `[${SITE_NAME}] Nova submissão: ${data.formType ?? 'Formulário'}`,
  displayName: 'Notificação de formulário',
  previewData: {
    formType: 'Trabalhe Conosco',
    submittedAt: '29/05/2026 10:30',
    fields: [
      { label: 'Nome', value: 'Maria Silva' },
      { label: 'E-mail', value: 'maria@example.com' },
      { label: 'Telefone', value: '(11) 99999-9999' },
    ],
  },
} satisfies TemplateEntry

const main = { backgroundColor: '#ffffff', fontFamily: 'Arial, sans-serif' }
const container = { padding: '24px 28px', maxWidth: '600px' }
const h1 = { fontSize: '22px', fontWeight: 'bold', color: '#0d0d0d', margin: '0 0 6px' }
const subtitle = { fontSize: '13px', color: '#666666', margin: '0 0 18px' }
const hr = { borderColor: '#e5e7eb', margin: '18px 0' }
const label = { fontSize: '12px', color: '#6b7280', textTransform: 'uppercase' as const, letterSpacing: '0.5px', margin: '0 0 4px', fontWeight: 600 }
const value = { fontSize: '14px', color: '#0d0d0d', lineHeight: '1.5', margin: 0, whiteSpace: 'pre-wrap' as const }
const footer = { fontSize: '12px', color: '#999999', margin: '8px 0 0' }