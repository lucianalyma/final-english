import React from "react";
import * as S from "../Style/PageOneStyle";

export default function Home() {
  return (
    <S.Container>
      <S.GlobalStyle />
      <S.Section>
        <S.H2>How many tenses does the verb "do" have?</S.H2>
        <p>Do - did. done.</p>
        <S.H2>
          What does the verb "Have" indicate as a main position? Posse.
        </S.H2>
        <S.H2>
          Create two sentences with cognate words for "joy" and "sadness"
        </S.H2>
        <p>I'm confident. I'm depressed.</p>
        <S.H2>
          What is the difference between the verb "will" and "going to"?
          INCERTEZA E CERTEZA.
        </S.H2>
        <S.H2>Name four interrogative pronouns (Em inglês)</S.H2>
        <p>interrogative pronouns are who, what, which, whose.</p>
        <S.H2>How many types of adverbs are there in English? TEN.</S.H2>
      </S.Section>
      <S.Box>
        <S.H3>Create a sentence for an adverb of time (Em inglês)</S.H3>
        <p>I have to go NOW.</p>
        <S.H3>Create a mnemonic phrase (Em inglês)</S.H3>
        <p>Today is sunday. (dia de sol)</p>
      </S.Box>
    </S.Container>
  );
}
