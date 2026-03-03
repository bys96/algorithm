-- 코드를 작성해주세요
SELECT 
    ii.ITEM_ID,
    ii.ITEM_NAME,
    ii.RARITY
FROM ITEM_INFO parent
JOIN ITEM_TREE it 
    ON parent.ITEM_ID = it.PARENT_ITEM_ID
JOIN ITEM_INFO ii
    ON it.ITEM_ID = ii.ITEM_ID
WHERE parent.RARITY = 'RARE'
ORDER BY ii.ITEM_ID DESC;