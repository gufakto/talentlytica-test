import React, { useState } from 'react';
import './App.css';
import HeaderColumn from './components/HeaderColumn';
import Row from './components/Row';
import Mahasiswa, { AspekPenilaian, Mhs } from './Mahasiswa';
import Button from './components/Button';


function App() {

  const [mahasiswas, setMahasiswas] = useState<Array<Mahasiswa>>([
    {
      label: 'Mahasiswa 1',
      nama: 'mahasiswa_1',
      nilai: [
        { attribute: 'nilai_1', value: 0 },
        { attribute: 'nilai_2', value: 0 },
        { attribute: 'nilai_3', value: 0 },
        { attribute: 'nilai_4', value: 0 },
      ],
    }, {
      label: 'Mahasiswa 2',
      nama: 'mahasiswa_2',
      nilai: [
        { attribute: 'nilai_1', value: 0 },
        { attribute: 'nilai_2', value: 0 },
        { attribute: 'nilai_3', value: 0 },
        { attribute: 'nilai_4', value: 0 },
      ],
    }, {
      label: 'Mahasiswa 3',
      nama: 'mahasiswa_3',
      nilai: [
        { attribute: 'nilai_1', value: 0 },
        { attribute: 'nilai_2', value: 0 },
        { attribute: 'nilai_3', value: 0 },
        { attribute: 'nilai_4', value: 0 },
      ],
    }, {
      label: 'Mahasiswa 4',
      nama: 'mahasiswa_4',
      nilai: [
        { attribute: 'nilai_1', value: 0 },
        { attribute: 'nilai_2', value: 0 },
        { attribute: 'nilai_3', value: 0 },
        { attribute: 'nilai_4', value: 0 },
      ],
    }, {
      label: 'Mahasiswa 5',
      nama: 'mahasiswa_5',
      nilai: [
        { attribute: 'nilai_1', value: 0 },
        { attribute: 'nilai_2', value: 0 },
        { attribute: 'nilai_3', value: 0 },
        { attribute: 'nilai_4', value: 0 },
      ],
    }, {
      label: 'Mahasiswa 6',
      nama: 'mahasiswa_6',
      nilai: [
        { attribute: 'nilai_1', value: 0 },
        { attribute: 'nilai_2', value: 0 },
        { attribute: 'nilai_3', value: 0 },
        { attribute: 'nilai_4', value: 0 },
      ],
    }, {
      label: 'Mahasiswa 7',
      nama: 'mahasiswa_7',
      nilai: [
        { attribute: 'nilai_1', value: 0 },
        { attribute: 'nilai_2', value: 0 },
        { attribute: 'nilai_3', value: 0 },
        { attribute: 'nilai_4', value: 0 },
      ],
    }, {
      label: 'Mahasiswa 8',
      nama: 'mahasiswa_8',
      nilai: [
        { attribute: 'nilai_1', value: 0 },
        { attribute: 'nilai_2', value: 0 },
        { attribute: 'nilai_3', value: 0 },
        { attribute: 'nilai_4', value: 0 },
      ],
    }, {
      label: 'Mahasiswa 9',
      nama: 'mahasiswa_9',
      nilai: [
        { attribute: 'nilai_1', value: 0 },
        { attribute: 'nilai_2', value: 0 },
        { attribute: 'nilai_3', value: 0 },
        { attribute: 'nilai_4', value: 0 },
      ],
    }, {
      label: 'Mahasiswa 10',
      nama: 'mahasiswa_10',
      nilai: [
        { attribute: 'nilai_1', value: 0 },
        { attribute: 'nilai_2', value: 0 },
        { attribute: 'nilai_3', value: 0 },
        { attribute: 'nilai_4', value: 0 },
      ],
    },
  ]);

  const onSubmit = (e: React.MouseEvent) => {
    e.preventDefault();
    let finalNilai: AspekPenilaian = {};
    let iTemp=0;
    mahasiswas.forEach((item, i) => {
      iTemp++;
      finalNilai[`aspek_penilaian_${iTemp}`]={} as Mhs;
      let idxTemp = 0;
      item.nilai.forEach((child) => {
        idxTemp++;
        finalNilai[`aspek_penilaian_${iTemp}`][`mahasiswa_${idxTemp}`] = child.value
      })
    });
    
    const jsonString = `data:text/json;chatset=utf-8,${encodeURIComponent(
      JSON.stringify(finalNilai)
    )}`;
    const link = document.createElement("a");
    link.href = jsonString;
    link.download = "penilaian.json";

    link.click();
  }

  const onChange = (e: any) => {
    const names = e.target.name.split("-");
    setMahasiswas((state) => {
      const mhsIdx = mahasiswas.findIndex(x => x.nama === names[0]);
      const nilaiIdx = state[mhsIdx].nilai.findIndex(x => x.attribute === names[1]);
      state[mhsIdx].nilai[nilaiIdx].value = parseInt(e.target.value);

      return state;
    });

  }

  return (
    <div className="App">
      <header className="header">
        <h1>Penilaian Mahasiswa</h1>
      </header>
      <div className="main">
        <form>
          <HeaderColumn />
          {mahasiswas.map((item, i) =>
          (<Row
            label={item.label}
            name={item.nama}
            onChange={onChange}
            nilai={item.nilai}
            separate='-'
            key={i}
          />))}

          <div className="row">
            <div className="col-10">&nbsp;</div>
            <div className="col-2">
              <Button label='Simpan' onClick={onSubmit} />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
