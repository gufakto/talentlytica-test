export default interface Mahasiswa {
    nama: string;
    nilai: Array<Nilai>;
    label: string;
}

export interface Nilai {
    attribute: string;
    value: number;
}

export interface Mhs {
    [key: string]: number;
}

export interface AspekPenilaian {
    [key: string]: Mhs
}