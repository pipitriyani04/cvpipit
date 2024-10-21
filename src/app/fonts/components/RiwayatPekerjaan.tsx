function RowRiwayat(props: any) {
    return (
      <div className="border-2 border-blue-400/75 rounded-lg bg-gray-700 p-2 my-2">
        <div className="container mx-auto ">
          <div className="grid grid-cols-12 gap-1">
            <div className="col-span-12 md:col-span-4">{props.sebagai}</div>
            <div className="col-span-12 md:col-span-4">{props.instansi}</div>
            <div className="col-span-12 md:col-span-4">{props.tahun}</div>
          </div>
        </div>
      </div>
    );
  }
export default function Riwayatpendidikan() {
    return (
      <section>
        <div className="container mx-auto p-2 text-center pt-20 text-white">
        <h2 className="text-2x1 text-blue-400">Riwayat Pekerjaan</h2>
        <RowRiwayat sebagai="Guru SD" instansi="SD Negri Banyusari" tahun="2010" />
        <RowRiwayat sebagai="Akuntan" instansi="PT ATEJA" tahun="2016" />
        <RowRiwayat sebagai="Perpajakan" instansi="Kantor Pajak Majalengka"  tahun="2019" />
        <RowRiwayat sebagai="Programmer" instansi="CVGMedia"  tahun="2022" />
        </div>
        </section>
        ); 
    }