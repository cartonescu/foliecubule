import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Folie cu bule ieftina, Folie stretch, folie ambalare cu bule de aer</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Ce este folia cu bule de aer?" />
        <p className="description">
          Folia cu bule este un produs durabil, usor si maleabil, al carui principal beneficiu 
    este de a amortiza impactul asupra produselor impachetate. Folia cu bule este, practic, cel 
    mai usor produs de ambalare din cele existente pe piata. Folia cu bule este prietenoasa cu 
    mediul in care traim doarece este reutilizabila. In practica, daca folia isi pastreaza 
    integritatea bulelor dupa ce este despachetata, ea poate fi refolosita in acelasi scop. 
    Folia cu bule a capatat notorietate in randul firmelor care au departamente logistice, deoarece 
    este un produs foarte usor de utilizat, avand o greutate mica. Folia cu bule este, practic, 
    cel mai usor produs de ambalare din cele existente pe piata. 
    Sursa text <a href="https://www.foliebule.ro">https://www.foliebule.ro</a>
    
    Cum se foloseste folia cu bule si de ce este atat de bine cotata in lumea ambalajelor? Mai 
    jos vom explica pas cu pas despre cum se folosește folia cu bule pentru ambalarea diferitelor produse.

    In primul rand trebuie sa aveti o suprafata de lucru plana si curata.
    Găsiți o suprafață cat mai curată și plată pentru a vă împacheta bunurile pentru expediere. Asigurați-vă 
    că aveți spațiu suficient pentru marfa pe care doriți să o expediați și materialele de ambalare, deoarece 
    o rola de folie cu bule poate fi voluminoasa.

     De asemenea, este recomandat să vă asigurați că aveți suficient spațiu pentru a lipi, a plia și a fixa 
    articolul fără a muta întotdeauna dintr-o parte in alta accesoriile suplimentare sau chiar produsele pe 
    care doriti sa le ambalati.

     Așezați folia cu bule astfel încât partea cu bule să fie orientată în sus. Asigurați-vă că ați așezat 
    folia cu bule astfel încât partea cu bule a filmului de plastic, să fie orientată în sus.
    
    În acest fel, micile perne de aer își vor putea face treaba eficient și vor proteja bunurile dumneavoastră 
    în timpul tranzitului. In cazul in care bulele de aer vor fi dispuse către exterior, ele nu vor avea efectul 
    dorit, neputând amortiza socurile mecanice care vor apărea în timpul transportului. Asa ca, acordați atenție 
    modului în care dispuneți folia cu bule pe produs, pentru a obține scopul propus-securizarea mărfurilor dvs.
    Mai multe <a href="https://www.foliebule.ro/folie-cu-bule">vezi aici</a>
        </p>
      </main>

      <Footer />
    </div>
  )
}
