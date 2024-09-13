import Link from "next/link";

export default function StudentInfo() {
  return (
    <div>
      <p>My name: Ngoc Tam Nguyen</p>
      <p>
        A link to my git hub respositpory:
        <Link href="https://github.com/hinntam/cprg306-assignments">
          https://github.com/hinntam/cprg306-assignments
        </Link>
      </p>
    </div>
  );
}
