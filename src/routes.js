import './index.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import HomePage from './user/pages/homepage';
import KonsultasiPage from './user/pages/konsultasi';
import DetailPsikologPage from './user/pages/detailPsikolog';
import PsikologPage from './user/pages/psikolog';
import KategoriPage from './user/pages/kategori';
import DetailKategoriPage from './user/pages/detailKategori';
import DetailTestimoniPage from './user/pages/testimoni';
import LoginPage from './user/pages/login';
import DaftarPage from './user/pages/daftar';
import AboutPage from './user/pages/about';
import PenjadwalanPage from './user/pages/penjadwalan';
import ProfilPage from './user/pages/profil';
import Dashboard from './admin/views/Dashboard';
import ProfilPsikolog from './admin/views/profilPsikolog';
import ProfilUser from './admin/views/profilUser';
import TestPendeteksiMasalah from './admin/views/Test';
import JadwalKonsultasi from './admin/views/jadwalKonsul';
import DataPembayaran from './admin/views/dataPembayaran';
import HubungiKami from './admin/views/hubungiKami';
import Testimoni from './admin/views/Testimoni';
import PengalamanUser from './admin/views/pengalamanUser';
import KategoriMasalah from './admin/views/KategoriMasalah';
import TDuser from './admin/views/TD_user';
import TDpsikolog from './admin/views/TDpsikolog';
import TDtest from './admin/views/TDtest';
import TDjadwal from './admin/views/TDjadwal';
import TDpembayaran from './admin/views/TDpembayaran';

import TDtestimoni from './admin/views/TDtestimoni';
import TDpengalaman from './admin/views/TDpengalaman';
import TDkategori from './admin/views/TDkategori';
import Forbidden from './user/pages/403forbidden';
import EditProfilPage from './user/pages/editProfil';
import EditPasswordPage from './user/pages/editPassword';
import DeteksiPage from './user/pages/deteksi';
import Paket from './admin/views/Paket';
import TDpaket from './admin/views/TDpaket';
import NotFound from './user/pages/404notfound';
import HasilDeteksi from './user/pages/deteksiBermasalah';
import HasilDeteksi2 from './user/pages/deteksiTidakada';
import HasilDeteksi3 from './user/pages/deteksiPengembangan';
import Payment from './user/pages/payment';

AOS.init();

export default function UserRoutes() {
  return (
    <>
      <BrowserRouter>
        <div className="App">
          <Switch>
            <Route exact path="/403" component={Forbidden} />
            <Route exact path="/payment" component={Payment} />
            <Route exact path="/bermasalah" component={HasilDeteksi} />
            <Route exact path="/tidak-bermasalah" component={HasilDeteksi2} />
            <Route exact path="/butuh-pengembangan" component={HasilDeteksi3} />
            <Route
              exact
              path="/testimoni/:id"
              component={DetailTestimoniPage}
            />
            <Route exact path="/kategori/:id" component={DetailKategoriPage} />
            <Route exact path="/psikolog/:id" component={DetailPsikologPage} />
            <Route exact path="/testimoni/" component={DetailTestimoniPage} />
            <Route exact path="/konsultasi" component={KonsultasiPage} />
            <Route exact path="/deteksi" component={DeteksiPage} />
            <Route exact path="/kategori" component={KategoriPage} />
            <Route
              exact
              path="/jadwal-konsultasi"
              component={PenjadwalanPage}
            />
            <Route exact path="/psikolog" component={PsikologPage} />
            <Route exact path="/edit-profil" component={EditProfilPage} />
            <Route exact path="/ganti-password" component={EditPasswordPage} />
            <Route exact path="/profil" component={ProfilPage} />
            <Route exact path="/tentang" component={AboutPage} />
            <Route exact path="/daftar" component={DaftarPage} />
            <Route exact path="/login" component={LoginPage} />
            <Route exact path="/admin" component={Dashboard} />
            <Route exact path="/admin/profiluser" component={ProfilUser} />
            <Route
              exact
              path="/admin/profilpsikolog"
              component={ProfilPsikolog}
            />
            <Route exact path="/admin/paket" component={Paket} />
            <Route exact path="/admin/test" component={TestPendeteksiMasalah} />
            <Route
              exact
              path="/admin/jadwalkonsultasi"
              component={JadwalKonsultasi}
            />
            <Route
              exact
              path="/admin/datapembayaran"
              component={DataPembayaran}
            />
            <Route exact path="/admin/hubungikami" component={HubungiKami} />
            <Route exact path="/admin/testimoni" component={Testimoni} />
            <Route
              exact
              path="/admin/pengalamanuser"
              component={PengalamanUser}
            />
            <Route
              exact
              path="/admin/kategorimasalah"
              component={KategoriMasalah}
            />
            <Route exact path="/admin/tambahdatauser" component={TDuser} />
            <Route
              exact
              path="/admin/tambahdatapsikolog"
              component={TDpsikolog}
            />
            <Route exact path="/admin/tambahdatatest" component={TDtest} />
            <Route exact path="/admin/tambahdatajadwal" component={TDjadwal} />
            <Route
              exact
              path="/admin/tambahdatapembayaran"
              component={TDpembayaran}
            />

            <Route
              exact
              path="/admin/tambahdatatestimoni"
              component={TDtestimoni}
            />
            <Route
              exact
              path="/admin/tambahdatapengalaman"
              component={TDpengalaman}
            />
            <Route
              exact
              path="/admin/tambahdatakategori"
              component={TDkategori}
            />
            <Route exact path="/admin/tambahdatapaket" component={TDpaket} />
            <Route exact path="/" component={HomePage} />
            <Route exact path="*" component={NotFound} />
          </Switch>
        </div>
      </BrowserRouter>
    </>
  );
}
