import Link from 'next/link';
import Image from 'next/image';

export default function post1(){
    return(
        <div>
            <h1>POST-2</h1>
            <div>
                <figure>
                    <Image src="/public/p.png"></Image>
                    <figcaption><Link href="/">Back</Link></figcaption>
                </figure>
                <p><Link href="/">Voltar</Link></p>
            </div>
        </div>
    )
}