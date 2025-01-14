import { writeFileSync } from "node:fs";
const url = 'https://github.com/ghostery/trackerdb/releases/download/latest/trackerdb.json';
fetch(url)
    .then(response => response.text())
    .then(body => writeFileSync('./trackerdb.json', body, 'utf8'));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG93bmxvYWQtdHJhY2tlcmRiLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9hYS9sb2NhbC90ZW1wMC8iLCJzb3VyY2VzIjpbInNyYy9kb3dubG9hZC10cmFja2VyZGIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLFNBQVMsQ0FBQTtBQUV2QyxNQUFNLEdBQUcsR0FBRywrRUFBK0UsQ0FBQTtBQUUzRixLQUFLLENBQUMsR0FBRyxDQUFDO0tBQ1AsSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDO0tBQ2pDLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxrQkFBa0IsRUFBRSxJQUFJLEVBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQSJ9