namespace cross;

entity Books {
  key ID : Integer;
  title  : String;
  stock  : Integer;
}

@cds.persistence.exists
entity Employees {
  key ID    : Integer;
      NAME  : String;
      SCORE : Integer
}