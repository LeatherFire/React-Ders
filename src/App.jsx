import "./App.css";
import React from "react";

function Arama({aramaMetni,onSearch}){

  return(
    <div>
    <label htmlFor="arama">Ara: </label>
    <input id="arama" type="text" onChange={onSearch} value={aramaMetni}/>
    <p>
    </p>
    </div>
  )
}

function Yazi({id,url,baslik,yazar,yorum_sayisi,puan}){
  return(
    <li key={id}>
          <span>
            <a href={url}>{baslik}</a>, 
          </span>
          <span><b>Yazar:</b> {yazar}, </span>
          <span><b>Yorum Sayısı:</b> {yorum_sayisi}, </span>
          <span><b>Puan:</b> {puan}</span>
    </li>
  )
}

function Liste(props) {
  return (
    <ul>
      {props.yazilar.map(function(yazi){
        return(
          <Yazi key={yazi.id} {...yazi}/>
        );
        })}
    </ul>
  )
}

function App() {

  const [aramaMetni,setAramaMetni]=React.useState(localStorage.getItem("aranan")||"React");
  const yaziListesi = [
    {
      baslik: "React Öğreniyorum",
      url: "www.sdu.edu.tr",
      yazar: "Yiğit Uçar",
      yorum_sayisi: 3,
      puan: 4,
      id: 0,
    },
    {
      baslik: "Web Teknolojileri ve Programlama",
      url: "wwww.google.com.tr",
      yazar: "Can Uçar",
      yorum_sayisi: 2,
      puan: 5,
      id: 1,
    },
    // Yeni öğeleri ekleyin:
    {
      baslik: "JavaScript Temelleri",
      url: "www.example.com",
      yazar: "Ayşe Demir",
      yorum_sayisi: 1,
      puan: 3,
      id: 2,
    },
    {
      baslik: "Node.js İle Backend Geliştirme",
      url: "www.nodejs.org",
      yazar: "Mehmet Yılmaz",
      yorum_sayisi: 4,
      puan: 4,
      id: 3,
    },
    {
      baslik: "Python Programlamaya Giriş",
      url: "www.python.org",
      yazar: "Fatma Kaya",
      yorum_sayisi: 5,
      puan: 5,
      id: 4,
    },
    {
      baslik: "Frontend Framework Karşılaştırması",
      url: "www.frontendframeworks.com",
      yazar: "Ali Yılmaz",
      yorum_sayisi: 2,
      puan: 4,
      id: 5,
    },
    {
      baslik: "Veritabanı Tasarımı",
      url: "www.database-design.com",
      yazar: "Zeynep Karaca",
      yorum_sayisi: 3,
      puan: 5,
      id: 6,
    },
    {
      baslik: "Mobil Uygulama Geliştirme İpuçları",
      url: "www.mobiledevtips.com",
      yazar: "Emre Güneş",
      yorum_sayisi: 2,
      puan: 4,
      id: 7,
    },
    {
      baslik: "UI/UX Tasarımı Temelleri",
      url: "www.uiuxbasics.com",
      yazar: "Deniz Arslan",
      yorum_sayisi: 1,
      puan: 3,
      id: 8,
    },
    {
      baslik: "Agile Yazılım Geliştirme Süreçleri",
      url: "www.agilemethodology.com",
      yazar: "Burak Demir",
      yorum_sayisi: 3,
      puan: 4,
      id: 9,
    },
  ];
  
  
  const arananYazilar = yaziListesi.filter(function (yazi) {
    return (
      yazi.baslik.toLowerCase().includes(aramaMetni.toLowerCase()) ||
      yazi.yazar.toLowerCase().includes(aramaMetni.toLowerCase())
    );
  });
  
  

  function handleSearch(event){
    setAramaMetni(event.target.value);
  }

  React.useEffect(()=>{
    localStorage.setItem("aranan",aramaMetni);
  },[aramaMetni]);

  return (
    <React.Fragment>
      <h1>Yazılar</h1>
      <Arama aramaMetni={aramaMetni} onSearch={handleSearch}/>
      <strong>{aramaMetni} aranıyor...</strong>
      <hr />
      <Liste yazilar={arananYazilar}/>
    </React.Fragment>
  );
}
export default App;
