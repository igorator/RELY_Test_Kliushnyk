import Select, { SingleValue } from 'react-select';
import { useFilter } from '../hooks/useFilter';
import { IsFavSwitch } from './Switches/IsFavSwitch';
import { Breed } from '../types/types';

export const FilterBar = ({
  breeds,
  isLoading,
}: {
  breeds: Breed[];
  isLoading: boolean;
}) => {
  const { setSelectedBreed, onlyFavorite, setOnlyFavorite } = useFilter();

  const handleBreedChange = (
    selectedOption: SingleValue<{ value: string; label: string }>,
  ) => {
    setSelectedBreed(selectedOption ? selectedOption.value : null);
  };

  return (
    <div className='flex sm:flex-col md:flex-row items-center justify-between gap-12'>
      <IsFavSwitch
        isChecked={onlyFavorite}
        onChange={() => setOnlyFavorite(!onlyFavorite)}
        isDisabled={isLoading}
      />

      <Select
        options={[
          { value: '', label: 'Select a breed' },
          ...(breeds?.map((breed) => ({
            value: breed.id,
            label: breed.name,
          })) || []),
        ]}
        placeholder='Select a breed'
        onChange={handleBreedChange}
        className='my-react-select-container w-[100%] max-w-[640px]'
        classNamePrefix='my-react-select'
        isDisabled={isLoading}
      />
    </div>
  );
};
