import ContentWrapper from "@/components/ContentWrapper"
import Content from '@/components/card/Card'
import CardSection from "@/components/card/CardSection";
import MainSection from "@/components/Nav/MainSection";
export default function Home() {
  return (
    <ContentWrapper>
      <MainSection />
      <CardSection />
    </ContentWrapper>
  );
}
