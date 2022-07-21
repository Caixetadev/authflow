import * as S from "./styles";

export function Input({
  type,
  label,
  Icon,
  alt,
}: {
  type: string;
  label: string;
  Icon: any;
  alt: string;
}) {
  return (
    <S.Container>
      <S.Input type={type} required />
      <S.Image src={Icon.src} alt={alt} />
      <S.Label>{label}</S.Label>
    </S.Container>
  );
}
