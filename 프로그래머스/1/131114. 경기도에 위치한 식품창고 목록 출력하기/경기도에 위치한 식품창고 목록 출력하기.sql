-- 코드를 입력하세요
SELECT WAREHOUSE_ID,WAREHOUSE_NAME,ADDRESS,if(FREEZER_YN is Null,'N',FREEZER_YN)
from food_warehouse
where warehouse_name like "%경기%"
order by warehouse_id
