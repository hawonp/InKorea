import MainAppBar from "../../components/MainAppBar/MainAppBar";
import CatalogGrid from "../../components/AppCatalog/CatalogGrid";

export default function AppCatalog() {
  return (
    <div>
      <MainAppBar />
      <h2> App catalog page</h2>
        <CatalogGrid/>
    </div>
  );
}
