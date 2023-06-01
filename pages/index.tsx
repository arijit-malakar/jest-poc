import Link from 'next/link';

export default function Home() {
  return (
    <div className='tabs-btn'>
      <Link href='check-heading-text'>Check Heading Text</Link>
      <Link href='check-by-test-id'>Check Text By TestID</Link>
      <Link href='color-button'>Change Button Color</Link>
      <Link href='checkbox-button'>Disable/Enable Button</Link>
      <Link href='to-have-class'>Check For Class</Link>
      <Link href='form'>Form</Link>
    </div>
  );
}
