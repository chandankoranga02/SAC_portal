const clubNames = [
  "Management Club",
  "Devign",
  "Abhivyakti",
  "X-Bands",
  "Literary",
  "Aperture",
  "Dhristikon",
  "E-Cell GBPIET",
  "UHV",
  "Rama Community",
];

const teamsData = clubNames.map((name, index) => ({
  id: `club-${index + 1}`,
  name,
  description: "",
  members: [],
}));

export default teamsData;
