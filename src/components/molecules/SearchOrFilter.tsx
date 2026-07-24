interface SearchOrFilterProps {
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
}

export default function SearchOrFilter({ value, onChange, placeholder }: SearchOrFilterProps) {
  return (
    <label className="search-filter">
      <span className="sr-only">{placeholder}</span>
      <input value={value} onChange={(event) => onChange(event.target.value)} placeholder={placeholder} />
    </label>
  );
}
