import React from "react";
import * as S from "../Style/PageOneStyle";

export default function Home() {
  return (
    <S.Container>
      <S.GlobalStyle />
      <S.Header>
        <S.H1>FINAL ENGLISH CHALLENGE</S.H1>
      </S.Header>
      <S.Section>
        <S.H2>What "HTTPS" means?</S.H2>
        <p>Hyper Text Transfer Protocol Secure.</p>
        <S.H2>Stateless isn't change of state.</S.H2>
        <S.H2>Subjective pronouns are used to indicate what?</S.H2>
        <p>O sujeito da ação verbal.</p>
        <S.H2>Could, Should and Would are know as modal verbs.</S.H2>
        <S.H2>What Should means? "deveria".</S.H2>
        <S.H2>*EM PORTUGUÊS* - Construa essas seguintes frases em inglês:</S.H2>
      </S.Section>
      <S.Div>
        <S.Ul>
          <li>1 - We're going to talk great things about you!</li>
          <li>2 - He's going to Bahia next month.</li>
          <li>3 - She will be there tomorrow.</li>
        </S.Ul>
      </S.Div>
      <S.Box>
        <S.H3>Who is the subject of the sentence?</S.H3>
        <S.P>They gime me all the power.(Subject is They).</S.P>
        <S.H3>Conjugate the verb to be in the past tense (Em inglês)</S.H3>
        <p>
          I-was, He-was, she-was, it-was, you-were. We-were, you-were,
          they-were.
        </p>
        <S.H3>
          Build two sentences using "this" and "that", in the plural (Em inglês)
        </S.H3>
        <p>
          This is my pen. These are my pens. That is your pen. Those are your
          pens.
        </p>
      </S.Box>
    </S.Container>
  );
}
