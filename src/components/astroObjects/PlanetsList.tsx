import { ObservationObject } from "@/types";
import PlanetObject from "@/components/astroObjects/PlanetObject";
import planetsCatalog from "../../../data/catalogs/moon_planets.json";
import { pluralize } from "@/lib/text_utils";
import { processObservationListOpenNGC } from "@/lib/observation_lists_utils";

let objects: ObservationObject[] =
  processObservationListOpenNGC(planetsCatalog);

export default function PlanetsList() {
  return (
    <div>
      <h4 className="mt-3">
        {objects.length} {pluralize(objects.length, "Object", "Objects")}
      </h4>
      <table className="table">
        <tbody>
          {objects.map((object, i) => (
            <PlanetObject key={i} object={object} />
          ))}
        </tbody>
      </table>
    </div>
  );
}
