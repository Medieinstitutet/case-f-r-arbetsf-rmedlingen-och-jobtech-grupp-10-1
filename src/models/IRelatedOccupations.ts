export interface IRelatedOccupations {
  id: string,
  occupation_label: string,
  concept_taxonomy_id: string,
  legacy_ams_taxonomy_id: string,
  occupation_group: {
    occupation_group_label: string,
    concept_taxonomy_id: string,
    ssyk: string
  }
}