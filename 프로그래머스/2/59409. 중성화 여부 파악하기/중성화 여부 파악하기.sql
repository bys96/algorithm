-- 코드를 입력하세요
SELECT ANIMAL_ID, NAME, 
case
when sex_upon_intake like 'Neutered%' or sex_upon_intake like 'Spayed%' then 'O'
else 'X'
end as SEX_UPON_INTAKE
from animal_ins