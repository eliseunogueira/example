import Link from 'next/link'
import { Container, Main, Title, Description } from '../src/components/sharedstyles'

export default function About() {
  return (
    <Container>
      <Main>
        <Title>About Page</Title>
        <Description>
          <Link href="/">
            <a>&larr; Go Back</a>
          </Link>
          <div className='bg-blue-400'>1</div>
        </Description>
      </Main>
    </Container>
  )
}
