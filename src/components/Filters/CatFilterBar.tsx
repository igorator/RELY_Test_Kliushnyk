import { useNavigate } from "react-router-dom";
import { useFilter } from "../../hooks/useFilter";
import { FilterBar } from "../../shared/components/FilterBar";
import Select, { SingleValue } from "react-select";
import { IsFavSwitch } from "../../shared/components/IsFavSwitch";
import { Breed } from "../../data/types";
import { routes } from "../../data/routes";

export const CatFilterBar = ({
  breeds,
  isLoading,
}: {
  breeds: Breed[];
  isLoading: boolean;
}) => {
  const { setSelectedBreed, onlyFavorite, setOnlyFavorite } = useFilter();
  const navigate = useNavigate();

  const handleBreedChange = (
    selectedOption: SingleValue<{ value: string; label: string }>,
  ) => {
    setSelectedBreed(selectedOption ? selectedOption.value : null);
  };

  const handleSwitchChange = () => {
    const newFavoriteState = !onlyFavorite;
    setOnlyFavorite(newFavoriteState);

    if (newFavoriteState) {
      navigate(routes.favorite);
    } else {
      navigate(routes.search);
    }
  };

  return (
    <FilterBar>
      <IsFavSwitch
        isChecked={onlyFavorite}
        onChange={handleSwitchChange}
        isDisabled={isLoading}
      />
      <Select
        options={[
          { value: "", label: "Select a breed" },
          ...(breeds?.map((breed) => ({
            value: breed.id,
            label: breed.name,
          })) || []),
        ]}
        placeholder="Select a breed..."
        onChange={handleBreedChange}
        className={`my-react-select-container w-[100%] max-w-[640px] ${
          isLoading ? "opacity-40" : "opacity-100"
        }`}
        classNamePrefix="my-react-select"
        isDisabled={isLoading}
      />
    </FilterBar>
  );
};
