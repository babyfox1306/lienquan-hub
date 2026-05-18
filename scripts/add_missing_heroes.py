import json
import os

HEROES_PATH = "public/heroes.json"

with open(HEROES_PATH, "r", encoding="utf-8") as f:
    data = json.load(f)

existing_ids = {h["id"] for h in data["heroes"]}

new_heroes = [
    ("airi", "Airi", ["Assassin", "Warrior"], ["slayer"], "medium", "Đấu sĩ sát thủ cơ động cao, chuyên càn lướt bắt xạ thủ địch."),
    ("aleister", "Aleister", ["Mage"], ["mid"], "easy", "Pháp sư khống chế cứng bậc nhất, là nỗi khiếp sợ của mọi sát thủ bay nhảy."),
    ("amily", "Amily", ["Warrior"], ["slayer", "jungle"], "easy", "Đấu sĩ solo tay đôi cực mạnh nhờ nội tại tăng sát thương lên mục tiêu đơn độc."),
    ("annette", "Annette", ["Support", "Mage"], ["dragon"], "medium", "Trợ thủ buff giáp, khống chế diện rộng và chia rẽ đội hình địch xuất sắc."),
    ("aoi", "Aoi", ["Assassin"], ["jungle"], "hard", "Sát thủ cơ động bay nhảy bậc nhất với kỹ năng đu dây Long Trảo cướp rừng ám sát đỉnh cao."),
    ("ata", "Ata", ["Tank"], ["dragon", "slayer"], "easy", "Đỡ đòn hồi phục tốt bậc nhất nhờ nội tại giữ thanh máu ảo khi nhận sát thương."),
    ("aya", "Aya", ["Support"], ["dragon"], "easy", "Trợ thủ ký sinh độc đáo, có khả năng buff giáp ảo và hóa thú khống chế diện rộng địch."),
    ("azzenka", "Azzen'Ka", ["Mage"], ["mid"], "easy", "Pháp sư u hồn sa mạc khống chế diện rộng liên tục cực kỳ khó chịu trong combat tổng."),
    ("bijan", "Bijan", ["Warrior", "Tank"], ["slayer", "jungle"], "medium", "Đấu sĩ có khả năng lái thú cưỡi di chuyển siêu nhanh hỗ trợ đồng đội toàn bản đồ."),
    ("biron", "Biron", ["Warrior"], ["slayer"], "medium", "Đấu sĩ dũng mãnh sở hữu khả năng buff giáp ảo khổng lồ và hồi phục cực lớn khi combat."),
    ("bonnie", "Bonnie", ["Mage"], ["mid"], "easy", "Pháp sư tinh nghịch với bộ kỹ năng khống chế cứng và ngăn cản kẻ địch bay nhảy cực tốt."),
    ("bright", "Bright", ["Warrior", "Archer"], ["jungle", "dragon"], "medium", "Đấu sĩ xạ thủ đa năng, bất tử trong vài giây khi kích hoạt chiêu cuối."),
    ("celica", "Celica", ["Archer"], ["dragon"], "medium", "Xạ thủ pháo binh hạng nặng có khả năng lập pháo đài bắn tầm xa chí mạng cực khủng."),
    ("butterfly", "Butterfly", ["Assassin"], ["jungle"], "easy", "Sát thủ cổ điển với cơ chế hồi chiêu lập tức khi hạ gục hoặc phụ hạ gục kẻ địch."),
    ("capheny", "Capheny", ["Archer"], ["dragon"], "medium", "Xạ thủ cơ động có khả năng chuyển đổi vũ khí bắn đại liên cấu rỉa liên tục."),
    ("charlotte", "Charlotte", ["Warrior"], ["slayer"], "medium", "Nữ kiếm sĩ tài năng với bộ chiêu thức kiếm pháp dồn dập và giảm tốc đánh địch."),
    ("cresht", "Cresht", ["Tank", "Support"], ["dragon"], "easy", "Đỡ đòn chấn phái có khả năng hóa khổng lồ tăng giáp ảo chiếm 1/2 thanh máu."),
    ("darcy", "D'Arcy", ["Mage"], ["jungle", "mid"], "medium", "Pháp sư thứ nguyên với khả năng giam giữ kẻ địch trong ma trận không gian."),
    ("dextra", "Dextra", ["Warrior"], ["slayer"], "medium", "Đấu sĩ huyết tộc có khả năng biến sát thương nhận vào thành lượng hồi phục khổng lồ."),
    ("diaochan", "Điêu Thuyền", ["Mage"], ["mid"], "easy", "Pháp sư sở hữu hai lần đóng băng liên tiếp siêu khống chế khiến địch đứng hình."),
    ("dolia", "Dolia", ["Support"], ["dragon"], "easy", "Trợ thủ nhân ngư có khả năng làm mới hoàn toàn thời gian hồi chiêu cuối cho đồng đội."),
    ("dyadia", "Dyadia", ["Support", "Mage"], ["dragon"], "medium", "Trợ thủ có lối chơi đa năng kết nối duyên phận đồng minh và trói buộc kẻ địch."),
    ("elandorr", "Eland'orr", ["Archer", "Assassin"], ["jungle"], "hard", "Xạ thủ đi rừng bay nhảy ảo diệu nhất game thông qua các cánh bướm tinh linh."),
    ("enzo", "Enzo", ["Assassin"], ["jungle"], "hard", "Sát thủ kéo quăng và quật ngã kẻ địch cực kỳ hoa mỹ đòi hỏi độ chính xác cao."),
    ("erin", "Erin", ["Archer", "Mage"], ["dragon"], "medium", "Xạ thủ gây sát thương phép tinh linh vô cùng cơ động và bắn nhanh liên tục."),
    ("errol", "Errol", ["Warrior"], ["slayer", "jungle"], "medium", "Đấu sĩ quỷ kiếm càn lướt giao tranh mạnh mẽ nhờ hút máu vượt trội và chiêu cuối hất tung."),
    ("fennik", "Fennik", ["Archer"], ["jungle", "dragon"], "easy", "Cáo siêu thanh dọn quái và đẩy trụ nhanh nhất Liên Quân nhờ kíp nổ lan."),
    ("heino", "Heino", ["Mage", "Warrior"], ["mid", "slayer"], "medium", "Pháp sư thời không có khả năng quay ngược thời gian hồi sinh tế đàn và phục hồi máu."),
    ("helen", "Helen", ["Support"], ["dragon"], "easy", "Trợ thủ hồi máu mạnh nhất game, được coi là bình cứu thương di động của cả đội."),
    ("iggy", "Iggy", ["Mage"], ["mid"], "easy", "Pháp sư cấu rỉa tầm xa siêu mạnh với chiêu cuối hủy diệt diện rộng từ khoảng cách cực lớn."),
    ("ishar", "Ishar", ["Mage", "Support"], ["mid", "dragon"], "medium", "Pháp sư triệu hồi pet Tí Nị trợ chiến cấu rỉa và giam giữ kẻ địch trong lồng ma thuật."),
    ("kahlii", "Kahlii", ["Mage"], ["mid"], "easy", "Nữ thần cấu rỉa với chiêu cuối xả hàng trăm luồng đạn ma thuật tầm cực xa đẩy lùi mọi kẻ địch."),
    ("kaine", "Kaine", ["Assassin"], ["jungle", "slayer"], "medium", "Sát thủ tàng hình vô hạn cực kỳ đáng sợ với khả năng ám sát xạ thủ địch trong chớp mắt."),
    ("kilgroth", "Kil'Groth", ["Warrior"], ["slayer", "jungle"], "easy", "Đấu sĩ cuồng chiến chém nhanh như chớp, miễn nhiễm hoàn toàn mọi khống chế khi bật chiêu cuối."),
    ("kriknak", "Kriknak", ["Assassin"], ["jungle"], "easy", "Sát thủ bọ cánh cứng dồn sát thương sốc chết xạ thủ địch nhanh bậc nhất game."),
    ("krizzix", "Krizzix", ["Support"], ["dragon"], "medium", "Trợ thủ tắc kè hoa có khả năng tàng hình cả đội và gom kẻ địch lại cấu rỉa khống chế."),
    ("lumburr", "Lumburr", ["Tank", "Support"], ["dragon"], "easy", "Khổng lồ đá đỡ đòn có khả năng tạo giáp ảo cho đồng đội và hất tung kẻ địch diện rộng."),
    ("lindis", "Lindis", ["Archer"], ["jungle"], "medium", "Xạ thủ đi rừng có tầm nhìn rộng, tăng tốc chạy cực lớn khi đi qua các bụi cỏ bản đồ."),
    ("max", "Max", ["Tank", "Warrior"], ["slayer"], "medium", "Đấu sĩ đỡ đòn với chiêu cuối bay thẳng đến bất kì mục tiêu nào trên toàn bản đồ."),
    ("ming", "Ming", ["Support", "Mage"], ["dragon"], "easy", "Trợ thủ kết nối linh hồn tăng công và thủ cực lớn hoặc hồi máu siêu khủng cho đồng đội."),
    ("moren", "Moren", ["Archer"], ["dragon"], "medium", "Xạ thủ trâu bò bậc nhất Liên Quân nhờ nội tại cộng dồn giáp vật lý và giáp phép."),
    ("paine", "Paine", ["Assassin", "Mage"], ["jungle"], "hard", "Sát thủ ma pháp di chuyển siêu nhanh ám sát cực đỉnh chỉ với 1 nốt nhạc."),
    ("preyta", "Preyta", ["Mage"], ["mid"], "medium", "Pháp sư cưỡi rồng bay nhảy với khả năng cấu rỉa ma pháp tầm xa dọn lính siêu tốc."),
    ("quillen", "Quillen", ["Assassin"], ["jungle"], "medium", "Sát thủ ám sát đâm lén từ phía sau chắc chắn chí mạng 100% cực kỳ đáng sợ."),
    ("rouie", "Rouie", ["Support"], ["dragon"], "hard", "Trợ thủ dịch chuyển đồng minh biến về tế đàn hồi máu rồi quay lại giao tranh lập tức."),
    ("rourke", "Rourke", ["Warrior"], ["jungle"], "easy", "Đấu sĩ bắn nỏ tầm gần siêu trâu bò nhờ khiên bảo hộ miễn khống chế cực đỉnh."),
    ("roxie", "Roxie", ["Tank", "Warrior"], ["slayer"], "easy", "Đấu sĩ lửa kéo lê kẻ địch đi khắp nơi bằng xích rực lửa vô cùng khó chịu."),
    ("ryoma", "Ryoma", ["Warrior", "Assassin"], ["slayer", "jungle"], "medium", "Đấu sĩ samurai cấu rỉa tầm xa cực đau với kiếm thế cơ động đâm chọc liên tục."),
    ("sephera", "Sephera", ["Mage", "Support"], ["dragon", "mid"], "medium", "Pháp sư trợ thủ hồi máu cấu rỉa liên tục, bất tử không thể chọn làm mục tiêu khi dùng chiêu cuối."),
    ("sinestrea", "Sinestrea", ["Assassin"], ["jungle", "slayer"], "hard", "Sát thủ đổi máu ảo diệu bậc nhất game, có khả năng tự sát gây sát thương khổng lồ."),
    ("skud", "Skud", ["Tank", "Warrior"], ["jungle", "slayer"], "easy", "Đỡ đòn khổng lồ đấm phát chết luôn và có lượng máu tối đa lớn nhất game."),
    ("slimz", "Slimz", ["Archer"], ["jungle", "dragon"], "medium", "Chú thỏ ném lao cơ động làm choáng kẻ địch từ cực xa hỗ trợ combat rất mạnh."),
    ("stuart", "Stuart", ["Archer"], ["dragon"], "medium", "Xạ thủ cuồng loạn cấu rỉa dồn sát thương vật lý tầm xa siêu đau và miễn thương vật lý."),
    ("tachi", "Tachi", ["Warrior"], ["slayer", "dragon"], "medium", "Đấu sĩ samurai gây sát thương chuẩn khổng lồ sau khi mở phong ấn bốn phương."),
    ("teemee", "TeeMee", ["Support", "Tank"], ["dragon"], "medium", "Trợ thủ hack vàng cho đồng đội và có khả năng hồi sinh hồi máu lật kèo combat cực mạnh."),
    ("teeri", "Teeri", ["Archer"], ["dragon"], "easy", "Xạ thủ bắn rìu song phi nảy qua lại nhiều kẻ địch dọn lính và gây sát thương cực nhanh."),
    ("thorne", "Thorne", ["Archer"], ["dragon"], "hard", "Xạ thủ nạp đạn ma pháp (đỏ, vàng, xanh) bắn đa dạng hiệu ứng vô cùng biến hóa."),
    ("veera", "Veera", ["Mage"], ["mid"], "easy", "Nữ hoàng bóng đêm dồn combo làm choáng sốc chết bất kỳ kẻ địch máu giấy nào."),
    ("wiro", "Wiro", ["Tank", "Warrior"], ["slayer", "dragon"], "easy", "Đỡ đòn dũng mãnh sở hữu mạng thứ hai nhờ nội tại hồi sinh cực trâu bò."),
    ("wisp", "Wisp", ["Archer"], ["dragon"], "medium", "Xạ thủ nhí nhảnh xả đạn đại pháo diện rộng hủy diệt combat tổng cực mạnh."),
    ("wonderwoman", "Wonder Woman", ["Warrior", "Tank"], ["slayer", "jungle"], "medium", "Đấu sĩ chiến binh sở hữu khả năng chống chịu giáp ảo và làm choáng diện rộng cực đỉnh."),
    ("yan", "Yan", ["Warrior", "Assassin"], ["jungle", "slayer"], "hard", "Kiếm sĩ cọ vẽ combat liên tục cực ảo diệu khi kích hoạt chiêu cuối cấp độ cao."),
    ("ybneth", "Y'bneth", ["Tank"], ["slayer", "dragon"], "easy", "Người cây đỡ đòn khống chế cứng liên tục và khả năng hồi phục không giới hạn trong bụi."),
    ("yorn", "Yorn", ["Archer"], ["dragon"], "easy", "Xạ thủ sấy mũi tên thần liên hoàn hủy diệt mọi mục tiêu kể cả xe tăng địch."),
    ("zanis", "Triệu Vân", ["Warrior", "Assassin"], ["jungle"], "easy", "Đấu sĩ chiến thần càn quét cự ly gần gây sát thương chuẩn cực khủng và tăng tốc độ đánh."),
    ("zuka", "Zuka", ["Warrior", "Assassin"], ["slayer", "jungle"], "medium", "Gấu béo bay nhảy đập gậy dồn sát thương sốc chết mục tiêu chỉ trong nháy mắt.")
]

added_count = 0
for idx, (hid, hname, hrole, hlane, hdiff, hdesc) in enumerate(new_heroes):
    if hid in existing_ids:
        continue
    
    hero_record = {
        "id": hid,
        "name": hname,
        "role": hrole,
        "lane": hlane,
        "difficulty": hdiff,
        "description": hdesc,
        "skills": {
            "passive": "Đang cập nhật: Kỹ năng nội tại của vị tướng này.",
            "skill1": "Đang cập nhật: Kỹ năng chiêu 1 của vị tướng này.",
            "skill2": "Đang cập nhật: Kỹ năng chiêu 2 của vị tướng này.",
            "skill3": "Đang cập nhật: Kỹ năng chiêu cuối của vị tướng này."
        },
        "build_recommend": {
            "items": ["Giày Kiên Cường", "Thương Xuyên Phá", "Phức Hợp Kiếm", "Nanh Fenrir", "Huân Chương Troy", "Giáp Hộ Mệnh"],
            "spell": "Trừng Phạt" if "jungle" in hlane else "Tốc Biến",
            "emblem": "Vực Hỗn Loạn"
        },
        "counters": [],
        "synergies": [],
        "tier": "B",
        "tier_reason": "Tướng mới khởi tạo chưa đủ dữ liệu video 14 ngày.",
        "hot": False,
        "hot_count": 0,
        "thumbnail": None,
        "related_videos": []
    }
    data["heroes"].append(hero_record)
    added_count += 1

with open(HEROES_PATH, "w", encoding="utf-8") as f:
    json.dump(data, f, ensure_ascii=False, indent=2)

print(f"SUCCESS: Added {added_count} new heroes. Total is now {len(data['heroes'])}.")
