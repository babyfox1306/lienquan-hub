import json
import os

heroes_data = [
    {
        "id": "nakroth", "name": "Nakroth", "role": ["Assassin"], "lane": ["jungle"], "difficulty": "hard",
        "description": "Sát thủ tốc độ cao với combo dash liên tiếp, khả năng bay nhảy cướp rừng gánh team cực mạnh.",
        "skills": {
            "passive": "Thẩm phán oai nghiêm: Đòn đánh thường thứ 4 hất tung mục tiêu.",
            "skill1": "Bồi thẩm đoàn: Lao về phía trước hất tung và gây sát thương.",
            "skill2": "Nguồn cơn rắc rối: Biến về phía sau và cường hóa đòn đánh tiếp theo.",
            "skill3": "Uy áp: Chém liên tục gây sát thương và miễn khống chế."
        },
        "build_recommend": {
            "items": ["Thương Xuyên Phá", "Giày Kiên Cường", "Phức Hợp Kiếm", "Nanh Fenrir", "Thương Longinus", "Giáp Hộ Mệnh"],
            "spell": "Trừng Phạt",
            "emblem": "Vực Hỗn Loạn - Ma Tính"
        },
        "counters": ["Arum", "Aleister", "Baldum"],
        "synergies": ["Thane", "Krixi"]
    },
    {
        "id": "murad", "name": "Murad", "role": ["Assassin"], "lane": ["jungle"], "difficulty": "hard",
        "description": "Lãng khách thời không, sở hữu bộ chiêu thức né sát thương và càn quét đội hình địch cực kỳ ảo diệu.",
        "skills": {
            "passive": "Ảnh hồn: Đòn đánh thường thứ 4 kích hoạt nội tại phong ấn ảo ảnh trảm.",
            "skill1": "Tàn ảnh đao: Lướt đi gây sát thương, lần thứ 3 quay về vị trí ban đầu.",
            "skill2": "Vô ảnh vực: Tạo vùng không gian gây chậm và giảm giáp địch.",
            "skill3": "Ảo ảnh trảm: Tấn công liên tục trong vùng chỉ định, không thể bị chọn làm mục tiêu."
        },
        "build_recommend": {
            "items": ["Kiếm Truy Hồn", "Giày Du Mục", "Thương Xuyên Phá", "Phức Hợp Kiếm", "Nanh Fenrir", "Giáp Hộ Mệnh"],
            "spell": "Trừng Phạt",
            "emblem": "Tháp Quang Minh - Thánh Thuẫn"
        },
        "counters": ["Arum", "Grakk", "Mina"],
        "synergies": ["Alice", "Gildur"]
    },
    {
        "id": "zata", "name": "Zata", "role": ["Mage", "Assassin"], "lane": ["mid"], "difficulty": "hard",
        "description": "Pháp sư sát thủ có khả năng dồn sát thương từ trên không cực bá đạo khi bay lên kích hoạt lông vũ.",
        "skills": {
            "passive": "Phong sát: Các chiêu thức chạm nhau gây bùng nổ sát thương diện rộng.",
            "skill1": "Ưng giực: Bắn ra phi tiêm lông vũ gây sát thương.",
            "skill2": "Vòi rồng: Tạo cơn lốc kéo về phía bản thân gây chậm.",
            "skill3": "Thiên dực: Lướt liên tục bám theo chiêu thức để bay lên trời bắn lông vũ."
        },
        "build_recommend": {
            "items": ["Giày Phù Thủy", "Trượng Bùng Nổ", "Vương Miện Hecate", "Trượng Hỗn Mang", "Quyền Trượng Rhea", "Sách Thánh"],
            "spell": "Tốc Biến",
            "emblem": "Vực Hỗn Loạn - Ma Tính"
        },
        "counters": ["Aleister", "Arum", "Thane"],
        "synergies": ["Krixi", "Grakk"]
    },
    {
        "id": "violet", "name": "Violet", "role": ["Marksman"], "lane": ["dragon"], "difficulty": "medium",
        "description": "Nữ xạ thủ cơ động bậc nhất với khả năng nhào lộn bắn đạn cường hóa dồn sát thương tầm xa.",
        "skills": {
            "passive": "Nạp đạn: Đòn đánh thường giảm thời gian hồi chiêu của Đạn xuyên thấu.",
            "skill1": "Đạn xuyên thấu: Lộn về phía trước và cường hóa đòn đánh thường tiếp theo.",
            "skill2": "Lựu đạn nổ: Ném lựu đạn gây sát thương vật lý và làm chậm địch.",
            "skill3": "Pháo đại lượng: Bắn pháo cực mạnh tầm xa gây sát thương lớn."
        },
        "build_recommend": {
            "items": ["Thần Sa", "Giày Thuật Sĩ", "Thánh Kiếm", "Song Đao Bão Táp", "Nanh Fenrir", "Giáp Hộ Mệnh"],
            "spell": "Tốc Biến",
            "emblem": "Tháp Quang Minh - Luyện Kim"
        },
        "counters": ["Nakroth", "Ngộ Không", "Quillen"],
        "synergies": ["Thane", "Baldum"]
    },
    {
        "id": "laville", "name": "Laville", "role": ["Marksman"], "lane": ["dragon"], "difficulty": "easy",
        "description": "Xạ thủ có tốc độ bắn cực nhanh, khả năng mở giao tranh toàn bản đồ bằng Đạn thần quang.",
        "skills": {
            "passive": "Đạn liên châu: Đánh thường tích lũy tốc đánh, tối đa bắn ra 3 tia đạn.",
            "skill1": "Đạn ánh sáng: Cường hóa đòn đánh thường bắn nhiều mục tiêu.",
            "skill2": "Khiên phản tốc: Tạo lá chắn chặn chiêu thức và tăng tốc chạy.",
            "skill3": "Đạn thần quang: Bắn ra mũi tên ánh sáng khổng lồ gây choáng toàn bản đồ."
        },
        "build_recommend": {
            "items": ["Thần Sa", "Giày Tốc Hành", "Thánh Kiếm", "Song Đao Bão Táp", "Diệt Thần Cung", "Giáp Hộ Mệnh"],
            "spell": "Tốc Biến",
            "emblem": "Tháp Quang Minh - Luyện Kim"
        },
        "counters": ["Ngộ Không", "Zuka", "Violet"],
        "synergies": ["Grakk", "Zip"]
    },
    {
        "id": "yena", "name": "Yena", "role": ["Warrior", "Assassin"], "lane": ["slayer"], "difficulty": "hard",
        "description": "Vũ nữ bán nguyệt với bộ kỹ năng 7 chiêu thức linh hoạt, chuyển đổi giữa song đao và viên đao cực mạnh.",
        "skills": {
            "passive": "Hiến tế: Dùng song đao tích lũy ấn gây câm lặng và làm chậm.",
            "skill1": "Toái nguyệt trảm / Hoành nguyệt trảm: Lướt chém hoặc tụ lực chém gây sát thương cực lớn.",
            "skill2": "Luân nguyệt trảm / Tứ nguyệt trảm: Phóng đao xoay tròn hoặc vung đao đẩy lùi liên tục.",
            "skill3": "Mãn nguyệt trảm / Bán nguyệt trảm: Chuyển đổi trạng thái vũ khí song đao và viên đao."
        },
        "build_recommend": {
            "items": ["Thương Longinus", "Giày Kiên Cường", "Phức Hợp Kiếm", "Nanh Fenrir", "Huân Chương Troy", "Giáp Hộ Mệnh"],
            "spell": "Tốc Biến",
            "emblem": "Vực Hỗn Loạn - Đấu Khí"
        },
        "counters": ["Florentino", "Omen", "Riktor"],
        "synergies": ["Krixi", "Tulen"]
    },
    {
        "id": "marja", "name": "Marja", "role": ["Mage", "Warrior"], "lane": ["slayer", "mid"], "difficulty": "medium",
        "description": "Nữ hoàng oán linh có khả năng hồi phục máu cực mạnh và hóa thân không thể bị chọn làm mục tiêu.",
        "skills": {
            "passive": "Hồn ma oán hận: Tăng công phép và hồi máu dựa trên lượng máu đã mất.",
            "skill1": "Sóng oán vọng: Bắn ra làn sóng gây sát thương phép và làm chậm.",
            "skill2": "Phệ hồn trùng: Gọi bầy trùng hút máu đối thủ hồi phục cho bản thân.",
            "skill3": "Ác hồn: Hóa thân thành luồng oán linh tăng tốc chạy, miễn sát thương và khống chế."
        },
        "build_recommend": {
            "items": ["Giày Thuật Sĩ", "Trượng Băng", "Mặt Nạ Berith", "Sách Truy Hồn", "Trượng Hỗn Mang", "Vương Miện Hecate"],
            "spell": "Tốc Biến",
            "emblem": "Vực Hỗn Loạn - Đấu Khí"
        },
        "counters": ["Keera", "Tulen", "Florentino"],
        "synergies": ["Thane", "Arthur"]
    },
    {
        "id": "hayate", "name": "Hayate", "role": ["Marksman"], "lane": ["dragon", "jungle"], "difficulty": "hard",
        "description": "Ninja tà ác sở hữu sát thương chuẩn chí mạng cực kỳ đáng sợ đối với dàn tanker đối thủ.",
        "skills": {
            "passive": "Phản ứng dây chuyền: Đòn đánh thường tích lũy ấn gây sát thương chuẩn chí mạng.",
            "skill1": "Phi tiêu vô ảnh: Phóng liên tiếp phi tiêu gây sát thương vật lý và kích hoạt nội tại.",
            "skill2": "Ảnh biến: Biến về phía trước và tăng tốc chạy khi có kẻ địch xung quanh.",
            "skill3": "Bão phi tiêu: Lướt đi liên tục phóng mưa phi tiêu sát thương diện rộng cực lớn."
        },
        "build_recommend": {
            "items": ["Rìu Rừng / Thần Sa", "Giày Du Mục", "Kiếm Fafnir", "Rìu Hyoga", "Thánh Kiếm", "Giáp Hộ Mệnh"],
            "spell": "Thanh Tẩy",
            "emblem": "Tháp Quang Minh - Luyện Kim"
        },
        "counters": ["Violet", "Joker", "Valhein"],
        "synergies": ["Baldum", "Alice"]
    },
    {
        "id": "florentino", "name": "Florentino", "role": ["Warrior"], "lane": ["slayer"], "difficulty": "extreme",
        "description": "Kiếm sĩ hào hoa với combo nhặt hoa lướt kiếm vô hạn, vô địch đấu tay đôi đường tà thần.",
        "skills": {
            "passive": "Xuất chúng: Lướt chém cường hóa đòn đánh thường sau khi rời giao tranh.",
            "skill1": "Hào hoa: Ném hoa gây sát thương và choáng nhẹ, tạo ra 3 bông hoa trên đất.",
            "skill2": "Thưởng hoa: Đâm kiếm liên hoàn gây sát thương chuẩn dựa trên phần trăm máu đối thủ.",
            "skill3": "Tài hoa: Quyết đấu với một mục tiêu, miễn khống chế từ các mục tiêu khác."
        },
        "build_recommend": {
            "items": ["Thương Longinus", "Giày Kiên Cường", "Phức Hợp Kiếm", "Nanh Fenrir", "Nham Thuẫn", "Giáp Hộ Mệnh"],
            "spell": "Tốc Biến",
            "emblem": "Vực Hỗn Loạn - Đấu Khí"
        },
        "counters": ["Arum", "Aleister", "Omen"],
        "synergies": ["Tulen", "Liliana"]
    },
    {
        "id": "riktor", "name": "Riktor", "role": ["Warrior", "Assassin"], "lane": ["slayer", "roam"], "difficulty": "hard",
        "description": "Kẻ đi săn quỷ thích nghi môi trường cực tốt, thay đổi hiệu ứng chiêu thức theo sông, bụi rậm, và đường.",
        "skills": {
            "passive": "Chiến binh tinh nhuệ: Thay đổi trạng thái võ khí và thuộc tính theo địa hình.",
            "skill1": "Chặt và chém: Lướt chém gây sát thương và hất tung (nếu ở trong bụi rậm).",
            "skill2": "Phòng ngự phản công: Tạo trạng thái miễn sát thương và phản đòn cực kỳ khó chịu.",
            "skill3": "Vùng diệt quỷ: Tạo vùng sát thương liên tục quanh bản thân và gây câm lặng."
        },
        "build_recommend": {
            "items": ["Thương Xuyên Phá", "Giày Kiên Cường", "Phức Hợp Kiếm", "Nanh Fenrir", "Giáp Gaia", "Giáp Hộ Mệnh"],
            "spell": "Tốc Biến",
            "emblem": "Vực Hỗn Loạn - Ma Tính"
        },
        "counters": ["Maloch", "Omen", "Thane"],
        "synergies": ["Krixi", "Nakroth"]
    },
    {
        "id": "thane", "name": "Thane", "role": ["Tank"], "lane": ["roam"], "difficulty": "easy",
        "description": "Đức vua tối cao kiên cường, tấm khiên vững chắc nhất đỡ đòn cho đồng đội combat.",
        "skills": {
            "passive": "Quyền năng tối cao: Tự động hồi phục lượng lớn máu khi máu xuống thấp.",
            "skill1": "Xung phong: Lao thẳng đẩy lùi kẻ địch gây sát thương vật lý liên tục.",
            "skill2": "Gươm thần: Nện kiếm xuống đất hất tung và gây sát thương diện rộng.",
            "skill3": "Excalibur: Chém nhát kiếm khổng lồ gây sát thương chuẩn cực lớn theo phần trăm máu đã mất."
        },
        "build_recommend": {
            "items": ["Đại Địa Mở Trói", "Giày Kiên Cường", "Giáp Gaia", "Khiên Thất Truyền", "Giáp Thống Khổ", "Huân Chương Troy"],
            "spell": "Tốc Biến",
            "emblem": "Rừng Nguyên Sinh - Mộc Giáp"
        },
        "counters": ["Hayate", "Maloch", "Lauriel"],
        "synergies": ["Violet", "Zata"]
    },
    {
        "id": "baldum", "name": "Baldum", "role": ["Tank"], "lane": ["roam"], "difficulty": "easy",
        "description": "Nhân mã đất đá, nổi tiếng với kỹ năng chôn đối thủ xuống lòng đất cực kỳ ức chế.",
        "skills": {
            "passive": "Cường tráng: Tăng lượng lớn giáp vật lý từ trang bị bảo hộ.",
            "skill1": "Vật tổ vỗ về: Lao tới húc kẻ địch ra phía sau lưng bản thân.",
            "skill2": "Địa chấn: Giẫm đất liên tục gây sát thương vật lý và làm giảm sát thương của địch.",
            "skill3": "Địa giam: Tạo vùng giam cầm chôn toàn bộ kẻ địch xuống lòng đất trong vài giây."
        },
        "build_recommend": {
            "items": ["Đại Địa Thần Khiên", "Giày Kiên Cường", "Khiên Thất Truyền", "Giáp Gaia", "Giáp Thống Khổ", "Nham Thuẫn"],
            "spell": "Tốc Biến",
            "emblem": "Rừng Nguyên Sinh - Mộc Giáp"
        },
        "counters": ["Hayate", "Lauriel", "Chaugnar"],
        "synergies": ["Violet", "Krixi"]
    },
    {
        "id": "arum", "name": "Arum", "role": ["Tank", "Support"], "lane": ["roam"], "difficulty": "easy",
        "description": "Nữ vương thú linh sở hữu chiêu thức khóa cứng mục tiêu ghê gớm nhất game, khắc tinh cứng của sát thủ cơ động.",
        "skills": {
            "passive": "Thú kích: Linh thú bay quanh Arum gây sát thương phép và hồi máu khủng khiếp khi chạm địch.",
            "skill1": "Thú điệp: Gọi linh thú bay quanh bản thân (tối đa 3 linh thú).",
            "skill2": "Thú sổng: Giải phóng linh thú vồ tới gây choáng và làm chậm tầm xa.",
            "skill3": "Thú thú liên kết: Khóa chặt một mục tiêu, chia sẻ mọi sát thương phải gánh chịu."
        },
        "build_recommend": {
            "items": ["Đại Địa Ma Nhãn", "Giày Kiên Cường", "Khiên Thất Truyền", "Giáp Gaia", "Giáp Thống Khổ", "Giáp Hộ Mệnh"],
            "spell": "Tốc Biến",
            "emblem": "Rừng Nguyên Sinh - Mộc Giáp"
        },
        "counters": ["Chaugnar", "Hayate", "Elsu"],
        "synergies": ["Krixi", "Tulen"]
    },
    {
        "id": "xeniel", "name": "Xeniel", "role": ["Tank"], "lane": ["roam", "slayer"], "difficulty": "medium",
        "description": "Sứ giả thần thánh, có khả năng bay toàn bản đồ cứu nguy và buff lá chắn khổng lồ cho đồng đội.",
        "skills": {
            "passive": "Sách thánh tích: Đòn đánh thường cường hóa gây thêm sát thương phép dựa trên máu tối đa.",
            "skill1": "Thần hộ thể: Tạo lá chắn hấp thụ sát thương, có thể tự kích nổ gây sát thương phép.",
            "skill2": "Chùy thần lực: Nhảy nện xuống vị trí chỉ định gây sát thương và choáng.",
            "skill3": "Sứ mệnh cứu thế: Bay đến vị trí của đồng đội, hồi máu và giảm sát thương gánh chịu."
        },
        "build_recommend": {
            "items": ["Đại Địa Mở Trói", "Giày Kiên Cường", "Khiên Thất Truyền", "Giáp Gaia", "Giáp Thống Khổ", "Phù Chú Trường Sinh"],
            "spell": "Bộc Phá",
            "emblem": "Rừng Nguyên Sinh - Mộc Giáp"
        },
        "counters": ["Hayate", "Maloch", "Lauriel"],
        "synergies": ["Nakroth", "Zuka"]
    },
    {
        "id": "grakk", "name": "Grakk", "role": ["Tank", "Support"], "lane": ["roam"], "difficulty": "medium",
        "description": "Kẻ phàm ăn tàn bạo, gieo rắc nỗi sợ hãi tột cùng bằng những cú kéo Xích ma quái xoay chuyển giao tranh.",
        "skills": {
            "passive": "Báo oán: Khi chịu sát thương lớn hoặc bị hạ gục sẽ tự phát nổ gây sát thương phép lớn.",
            "skill1": "Kẻ càn quét: Nện đất gây sát thương phép và làm chậm kẻ địch xung quanh.",
            "skill2": "Xích ma quái: Phóng xích kéo một mục tiêu từ xa về phía bản thân.",
            "skill3": "Nuốt chửng: Há miệng khổng lồ hút liên tục khống chế toàn bộ kẻ địch phía trước."
        },
        "build_recommend": {
            "items": ["Đại Địa Ma Nhãn", "Giày Kiên Cường", "Khiên Thất Truyền", "Giáp Gaia", "Giáp Thống Khổ", "Huân Chương Troy"],
            "spell": "Tốc Biến",
            "emblem": "Rừng Nguyên Sinh - Trói Buộc"
        },
        "counters": ["Chaugnar", "Thane", "Toro"],
        "synergies": ["Laville", "Natalya"]
    },
    {
        "id": "wukong", "name": "Wukong", "role": ["Assassin", "Warrior"], "lane": ["jungle", "slayer"], "difficulty": "medium",
        "description": "Tề Thiên Đại Thánh tinh nghịch, thoắt ẩn thoắt hiện tàng hình gõ chí mạng bốc hơi chủ lực địch.",
        "skills": {
            "passive": "Vô địch thiên hạ: Cường hóa đòn đánh thường tiếp theo sau khi dùng chiêu, tăng chí mạng.",
            "skill1": "Phân thân thuật: Tàng hình phân thân để di chuyển áp sát đối thủ bất ngờ.",
            "skill2": "Cân đẩu vân: Lướt tới gây sát thương vật lý và tăng giáp cho bản thân.",
            "skill3": "Gậy như ý: Hất tung kẻ địch xung quanh và làm choáng diện rộng."
        },
        "build_recommend": {
            "items": ["Kiếm Truy Hồn", "Giày Du Mục", "Thánh Kiếm", "Song Đao Bão Táp", "Nanh Fenrir", "Phức Hợp Kiếm"],
            "spell": "Trừng Phạt",
            "emblem": "Vực Hỗn Loạn - Ma Tính"
        },
        "counters": ["Arum", "Grakk", "Thane"],
        "synergies": ["Alice", "Krixi"]
    },
    {
        "id": "toro", "name": "Toro", "role": ["Tank"], "lane": ["roam"], "difficulty": "easy",
        "description": "Ngưu ma vương lỳ lợm nhất Liên Quân, miễn khống chế liên tục và chống chịu sát thương tuyệt vời.",
        "skills": {
            "passive": "Mình đồng da sắt: Toro luôn ở trạng thái miễn khống chế và được giảm sát thương khi dùng chiêu.",
            "skill1": "Sừng trâu: Lao thẳng hất tung và gây sát thương vật lý lên mục tiêu.",
            "skill2": "Dư chấn: Nện đất tạo lá chắn và gây sát thương vật lý làm chậm kẻ địch.",
            "skill3": "Đại địa chấn: Nện liên tiếp 3 phát xuống đất, phát thứ 3 hất tung diện rộng cực lớn."
        },
        "build_recommend": {
            "items": ["Đại Địa Thần Khiên", "Giày Kiên Cường", "Khiên Thất Truyền", "Giáp Gaia", "Giáp Thống Khổ", "Nham Thuẫn"],
            "spell": "Tốc Biến",
            "emblem": "Rừng Nguyên Sinh - Mộc Giáp"
        },
        "counters": ["Hayate", "Maloch", "Lauriel"],
        "synergies": ["Violet", "Krixi"]
    },
    {
        "id": "gildur", "name": "Gildur", "role": ["Tank", "Mage"], "lane": ["roam", "mid"], "difficulty": "easy",
        "description": "Vua hoàng kim nổi tiếng với những cú Vụ nổ vàng cấu rỉa tầm siêu xa và khống chế diện rộng bá đạo.",
        "skills": {
            "passive": "Bàn tay vàng: Đòn đánh thường thứ 4 hoặc sau khi dùng chiêu đẩy lùi gây sát thương phép.",
            "skill1": "Quả đấm vàng: Lao tới đấm cường hóa đòn đánh thường tiếp theo.",
            "skill2": "Vụ nổ vàng: Bắn vàng tầm cực xa gây sát thương phép và choáng diện rộng.",
            "skill3": "Vương quốc vàng: Tạo ma trận vàng xung quanh khóa chặt và gây sát thương liên tục lên kẻ địch."
        },
        "build_recommend": {
            "items": ["Đại Địa Thế Trận", "Giày Phù Thủy", "Trượng Bùng Nổ", "Vương Miện Hecate", "Sách Truy Hồn", "Trượng Hỗn Mang"],
            "spell": "Tốc Biến",
            "emblem": "Tháp Quang Minh - Thần Hạ"
        },
        "counters": ["Chaugnar", "Toro", "Arthur"],
        "synergies": ["Elsu", "Yorn"]
    },
    {
        "id": "alice", "name": "Alice", "role": ["Support"], "lane": ["roam"], "difficulty": "easy",
        "description": "Tiểu thần thiện lương bé nhỏ dễ thương, buff giáp tăng tốc và câm lặng làm chậm cực kỳ khó chịu.",
        "skills": {
            "passive": "Nhanh nhẹn: Dùng chiêu thức tăng tốc chạy cho bản thân trong thoáng chốc.",
            "skill1": "Quả cầu ánh sáng: Ném quả cầu gây sát thương phép và choáng diện rộng.",
            "skill2": "Lá chắn tình bạn: Tạo giáp ảo hấp thụ sát thương và tăng tốc chạy cho đồng đội xung quanh.",
            "skill3": "Dòng chảy thời không: Tạo vùng đầm lầy làm chậm, giảm giáp phép và gây câm lặng kẻ địch liên tục."
        },
        "build_recommend": {
            "items": ["Đại Địa Thần Khiên", "Giày Thuật Sĩ", "Trượng Băng", "Sách Truy Hồn", "Mặt Nạ Berith", "Huân Chương Troy"],
            "spell": "Tốc Biến",
            "emblem": "Tháp Quang Minh - Du Hiệp"
        },
        "counters": ["Chaugnar", "Grakk", "Mina"],
        "synergies": ["Valhein", "Wukong"]
    },
    {
        "id": "jinna", "name": "Jinna", "role": ["Mage"], "lane": ["mid"], "difficulty": "easy",
        "description": "Đại sư thiền tông có lối chơi lao trực diện vào giữa đội hình địch giật xích xả sát thương khổng lồ.",
        "skills": {
            "passive": "Sức mạnh kinh kệ: Tích lũy đòn đánh thường bắn ra hạt chuỗi xuyên thấu chí mạng.",
            "skill1": "Hàng yêu phục ma: Phóng chuỗi hạt nẩy qua lại gây sát thương phép liên tục.",
            "skill2": "Thiền định: Tạo sóng âm gây sát thương phép và làm chậm kẻ địch xung quanh.",
            "skill3": "Kết giới xá lợi: Tạo kết giới tăng giáp, kháng hiệu ứng và tốc chạy, gây sát thương phép diện rộng."
        },
        "build_recommend": {
            "items": ["Giày Phù Thủy", "Ngọc Đại Pháp Sư", "Quyền Trượng Rhea", "Vương Miện Hecate", "Trượng Hỗn Mang", "Sách Thánh"],
            "spell": "Tốc Biến",
            "emblem": "Vực Hỗn Loạn - Ma Tính"
        },
        "counters": ["Thane", "Baldum", "Violet"],
        "synergies": ["Thane", "Toro"]
    },
    {
        "id": "volkath", "name": "Volkath", "role": ["Warrior", "Assassin"], "lane": ["slayer", "jungle"], "difficulty": "hard",
        "description": "Chúa tể bóng tối sở hữu khả năng cưỡi ngựa xung phong càn quét và trạng thái bất tử huyền thoại.",
        "skills": {
            "passive": "Ma quân: Tích lũy ấn gây sát thương nổ và tạo lá chắn cho bản thân.",
            "skill1": "Bá vương trảm: Vung đao chém quét xung quanh gây sát thương vật lý.",
            "skill2": "Bá vương trảo: Phóng trảo bắt mục tiêu và lao tới dồn sát thương.",
            "skill3": "Bất tử chiến hồn: Cưỡi ngựa xung phong miễn khống chế, sau đó bất tử trong vài giây khi xuống ngựa."
        },
        "build_recommend": {
            "items": ["Kiếm Truy Hồn", "Giày Kiên Cường", "Thương Longinus", "Phức Hợp Kiếm", "Nanh Fenrir", "Nham Thuẫn"],
            "spell": "Trừng Phạt",
            "emblem": "Vực Hỗn Loạn - Đấu Khí"
        },
        "counters": ["Arum", "Aleister", "Omen"],
        "synergies": ["Xeniel", "Alice"]
    },
    {
        "id": "maloch", "name": "Maloch", "role": ["Warrior", "Tank"], "lane": ["slayer", "mid"], "difficulty": "easy",
        "description": "Ma vương quản ngục vác quỷ kiếm chém sát thương chuẩn diện rộng khổng lồ, lá chắn siêu trâu.",
        "skills": {
            "passive": "Ma vương: Cường hóa kiếm chém đòn đánh thường gây sát thương chuẩn khi kích hoạt Luyện ngục.",
            "skill1": "Quỷ kiếm: Chém quét hình bán nguyệt gây sát thương vật lý cực lớn và cường hóa kiếm.",
            "skill2": "Đoạt hồn: Hút linh hồn đối thủ tạo lá chắn cực lớn dựa trên số mục tiêu trúng chiêu.",
            "skill3": "Luyện ngục: Nhảy vút lên nện xuống hất tung diện rộng và làm chậm cực mạnh."
        },
        "build_recommend": {
            "items": ["Kiếm Longinus", "Giày Kiên Cường", "Nanh Fenrir", "Khiên Thất Truyền", "Giáp Gaia", "Giáp Hộ Mệnh"],
            "spell": "Tốc Biến",
            "emblem": "Vực Hỗn Loạn - Đấu Khí"
        },
        "counters": ["Hayate", "Elsu", "Florentino"],
        "synergies": ["Grakk", "Toro"]
    },
    {
        "id": "krixi", "name": "Krixi", "role": ["Mage"], "lane": ["mid"], "difficulty": "easy",
        "description": "Tinh linh bươm bướm quốc dân có khả năng cấu rỉa phép tầm xa và hất tung giao tranh rất dễ chơi.",
        "skills": {
            "passive": "Tung cánh: Tăng tốc chạy cho bản thân mỗi khi dùng chiêu trúng đích.",
            "skill1": "Bướm ảo: Phóng ra ảo ảnh bướm bay đi bay về gây sát thương phép liên hoàn.",
            "skill2": "Bão lá: Tạo cơn bão lá cây hất tung kẻ địch trong vùng chỉ định.",
            "skill3": "Mưa sao băng: Triệu hồi mưa sao băng liên tục nện xuống đầu kẻ địch xung quanh."
        },
        "build_recommend": {
            "items": ["Giày Phù Thủy", "Trượng Bùng Nổ", "Vương Miện Hecate", "Sách Truy Hồn", "Trượng Hỗn Mang", "Sách Thánh"],
            "spell": "Tốc Biến",
            "emblem": "Tháp Quang Minh - Thần Hạ"
        },
        "counters": ["Nakroth", "Ngộ Không", "Quillen"],
        "synergies": ["Thane", "Grakk"]
    },
    {
        "id": "tulen", "name": "Tulen", "role": ["Mage", "Assassin"], "lane": ["mid", "jungle"], "difficulty": "hard",
        "description": "Hoàng tử lôi quang bay nhảy bắn tia sét dồn sát thương tầm gần, kết liễu bằng Lôi điểu cực sướng.",
        "skills": {
            "passive": "Lôi động: Tích lũy ấn lôi điện xung quanh bản thân tự động bắn đối thủ.",
            "skill1": "Lôi quang: Phóng 3 tia sét về phía trước gây sát thương phép diện rộng.",
            "skill2": "Lôi động: Biến ảnh tự do gây sát thương phép tại điểm đầu và điểm cuối.",
            "skill3": "Lôi điểu: Tụ lực bắn ra chú chim lôi điện khổng lồ kết liễu và hồi chiêu cực nhanh khi hạ gục mục tiêu."
        },
        "build_recommend": {
            "items": ["Kiếm Truy Hồn / Giày Phù Thủy", "Trượng Bùng Nổ", "Quyền Trượng Rhea", "Vương Miện Hecate", "Trượng Hỗn Mang", "Sách Thánh"],
            "spell": "Trừng Phạt / Tốc Biến",
            "emblem": "Tháp Quang Minh - Thần Hạ"
        },
        "counters": ["Aleister", "Arum", "Thane"],
        "synergies": ["Grakk", "Alice"]
    },
    {
        "id": "ignis", "name": "Ignis", "role": ["Mage"], "lane": ["mid"], "difficulty": "medium",
        "description": "Sứ giả lửa thiêng, xả hỏa trận liên tục thiêu đốt khống chế diện rộng cực kỳ khó chịu.",
        "skills": {
            "passive": "Hỏa linh: Đốt cháy mục tiêu và cường hóa chiêu thức tiếp theo bắn vào nạn nhân.",
            "skill1": "Hỏa cầu: Bắn cầu lửa gây sát thương phép và tăng tốc chạy cho bản thân.",
            "skill2": "Hỏa trận: Gọi trận mưa lửa gây sát thương phép làm chậm hoặc choáng nếu trúng mục tiêu cháy.",
            "skill3": "Hỏa hoạn: Tạo hỏa trận khổng lồ gây sát thương chuẩn cực lớn lên đối thủ bị cháy."
        },
        "build_recommend": {
            "items": ["Giày Thuật Sĩ", "Ngọc Đại Pháp Sư", "Trượng Băng", "Vương Miện Hecate", "Sách Truy Hồn", "Trượng Hỗn Mang"],
            "spell": "Tốc Biến",
            "emblem": "Tháp Quang Minh - Thần Hạ"
        },
        "counters": ["Nakroth", "Quillen", "Violet"],
        "synergies": ["Thane", "Toro"]
    },
    {
        "id": "lauriel", "name": "Lauriel", "role": ["Mage", "Assassin"], "lane": ["mid"], "difficulty": "hard",
        "description": "Đại thiên sứ múa cánh bất tử trong kết giới ma pháp, khắc tinh số một của đội hình tanker.",
        "skills": {
            "passive": "Trời phạt: Tích lũy ấn gây sát thương chuẩn nổ hồi máu và làm chậm đối thủ.",
            "skill1": "Con đường sám hối: Vẽ ra dấu ấn thánh giá gây sát thương phép bùng nổ.",
            "skill2": "Đôi cánh thuần khiết: Lướt tới phóng ra 3 quả cầu thánh quang, giảm hồi chiêu mạnh khi trúng đích.",
            "skill3": "Phán xét: Tạo vòng tròn ma pháp hồi chiêu siêu tốc cho Lauriel khi ở bên trong kết giới."
        },
        "build_recommend": {
            "items": ["Giày Thuật Sĩ", "Ngọc Đại Pháp Sư", "Quyền Trượng Rhea", "Huân Chương Troy", "Khiên Thất Truyền", "Sách Thánh"],
            "spell": "Thanh Tẩy",
            "emblem": "Vực Hỗn Loạn - Ma Tính"
        },
        "counters": ["Aleister", "Arum", "Paine"],
        "synergies": ["Thane", "Baldum"]
    },
    {
        "id": "liliana", "name": "Liliana", "role": ["Mage", "Assassin"], "lane": ["mid", "jungle"], "difficulty": "hard",
        "description": "Cửu vĩ hồ linh xinh đẹp, sở hữu 2 dạng người và hồ ly với lối chơi ảo diệu, dồn sát thương số một.",
        "skills": {
            "passive": "Yêu hồ: Nhận công vật lý/giáp phép khi ở dạng hồ ly và cường hóa đánh thường.",
            "skill1": "Hồ quang lực: Bắn ra luồng ánh sáng phép cực mạnh cấu rỉa diện rộng cực đau.",
            "skill2": "Hồ quang đạn: Bắn đạn ma pháp choáng, hoặc dạng cáo vồ cào tạo linh đạn khổng lồ đuổi theo mục tiêu.",
            "skill3": "Biến ảnh hoán hình: Chuyển đổi linh hoạt giữa dạng người và dạng cáo, miễn sát thương trong lúc biến thân."
        },
        "build_recommend": {
            "items": ["Giày Phù Thủy", "Trượng Bùng Nổ", "Vương Miện Hecate", "Sách Truy Hồn", "Trượng Hỗn Mang", "Sách Thánh"],
            "spell": "Tốc Biến",
            "emblem": "Tháp Quang Minh - Thần Hạ"
        },
        "counters": ["Arum", "Aleister", "Tulen"],
        "synergies": ["Thane", "Nakroth"]
    },
    {
        "id": "dirak", "name": "Dirak", "role": ["Mage"], "lane": ["mid"], "difficulty": "medium",
        "description": "Pháp sư tối cao dựng khiên chặn đạn bảo vệ đồng đội, bắn Pháo tử quang kết liễu tầm cực xa.",
        "skills": {
            "passive": "Giáp ma pháp: Dirak tự dùng năng lượng (mana) để gánh chịu sát thương thay máu.",
            "skill1": "Kim quang ấn: Triệu hồi bánh xe ấn chú đẩy lùi gây sát thương phép liên tục.",
            "skill2": "Thiên băng sa: Gọi thiên thạch rơi xuống đẩy lùi gây choáng diện rộng cực tốt.",
            "skill3": "Lô cốt ma pháp: Dựng lá chắn chặn mọi luồng đạn tấn công, kích hoạt bắn pháo tử quang toàn bản đồ."
        },
        "build_recommend": {
            "items": ["Giày Thuật Sĩ", "Ngọc Đại Pháp Sư", "Trượng Băng", "Sách Truy Hồn", "Trượng Hỗn Mang", "Vương Miện Hecate"],
            "spell": "Tốc Biến",
            "emblem": "Tháp Quang Minh - Thần Hạ"
        },
        "counters": ["Nakroth", "Zuka", "Keera"],
        "synergies": ["Grakk", "Arthur"]
    },
    {
        "id": "elsu", "name": "Elsu", "role": ["Marksman"], "lane": ["dragon", "mid"], "difficulty": "extreme",
        "description": "Tay súng bắn tỉa đáng sợ nhất đấu trường, sở hữu tầm bắn siêu xa và sát thương vật lý cực khủng.",
        "skills": {
            "passive": "Bắn tỉa: Tăng lượng lớn xuyên giáp vật lý và có khả năng ngụy trang ẩn thân sát tường.",
            "skill1": "Ưng trạm: Đặt thiết bị giám sát phát hiện tầm nhìn địch tàng hình trong vùng chỉ định.",
            "skill2": "Viễn trình kích: Ngắm bắn cực lâu bắn ra viên đạn tầm siêu xa hủy diệt máu đối phương.",
            "skill3": "Giật bắn: Nhảy lùi ra sau bắn viên đạn gây sát thương vật lý lớn và tăng tốc chạy trốn."
        },
        "build_recommend": {
            "items": ["Kiếm Fafnir", "Giày Tốc Chiến", "Kiếm Muramasa", "Thanh Kiếm", "Nanh Fenrir", "Giáp Hộ Mệnh"],
            "spell": "Tốc Biến",
            "emblem": "Tháp Quang Minh - Luyện Kim"
        },
        "counters": ["Nakroth", "Ngộ Không", "Max"],
        "synergies": ["Gildur", "Mina"]
    },
    {
        "id": "valhein", "name": "Valhein", "role": ["Marksman"], "lane": ["dragon", "mid"], "difficulty": "easy",
        "description": "Xạ thủ quốc dân thả diều cực khó chịu bằng phi tiêu gây choáng liên tục, tốc chạy siêu nhanh.",
        "skills": {
            "passive": "Ám khí: Đòn đánh thứ 3 ngẫu nhiên phóng phi tiêu đỏ/vàng/xanh cường hóa hiệu ứng.",
            "skill1": "Chuyến săn đẫm máu: Ném phi tiêu đỏ gây sát thương phép diện rộng và tăng tốc đánh.",
            "skill2": "Lời nguyền tử thần: Ném phi tiêu vàng choáng mục tiêu lập tức cực kỳ uy lực.",
            "skill3": "Bão đạn: Bắn loạt đạn bạc hình nón tầm gần gây sát thương cực lớn và tăng tốc chạy điên cuồng."
        },
        "build_recommend": {
            "items": ["Gươm Sấm Sét", "Giày Du Mục", "Kiếm Fafnir", "Thánh Kiếm", "Song Đao Bão Táp", "Giáp Hộ Mệnh"],
            "spell": "Tốc Biến",
            "emblem": "Tháp Quang Minh - Luyện Kim"
        },
        "counters": ["Ngộ Không", "Kriknak", "Zata"],
        "synergies": ["Alice", "Thane"]
    },
    {
        "id": "lubu", "name": "Lu Bu", "role": ["Warrior"], "lane": ["slayer", "jungle"], "difficulty": "medium",
        "description": "Chiến thần vô địch, sở hữu khả năng hồi máu bá đạo đệ nhất thiên hạ khi bật Chiến thần càn quét.",
        "skills": {
            "passive": "Tàn nhẫn: Dùng chiêu thức trúng đích giảm thời gian hồi chiêu của Thương độc long.",
            "skill1": "Xích thố mã: Lao lên tấn công 3 lần liên tiếp, phát thứ 3 hất tung kẻ địch.",
            "skill2": "Thương độc long: Phóng thương gây sát thương vật lý và làm chậm đối thủ.",
            "skill3": "Chiến thần: Cường hóa sát thương vật lý, kháng hiệu ứng và hồi máu khủng khiếp trên mỗi đòn đánh."
        },
        "build_recommend": {
            "items": ["Thương Longinus", "Giày Kiên Cường", "Phức Hợp Kiếm", "Nanh Fenrir", "Nham Thuẫn", "Giáp Hộ Mệnh"],
            "spell": "Trừng Phạt / Tốc Biến",
            "emblem": "Vực Hỗn Loạn - Đấu Khí"
        },
        "counters": ["Florentino", "Arum", "Aleister"],
        "synergies": ["Thane", "Alice"]
    },
    {
        "id": "veres", "name": "Veres", "role": ["Warrior", "Assassin"], "lane": ["slayer", "jungle", "mid"], "difficulty": "hard",
        "description": "Nữ sát thủ dùng huyết xích múa vòng tròn cực kỳ ảo diệu, hồi phục trâu bò và càn quét combat.",
        "skills": {
            "passive": "Huyết xích: Tích lũy điểm nội tại để múa huyết xích gây sát thương diện rộng hồi phục máu lớn.",
            "skill1": "Song xích: Phóng xích gây sát thương vật lý và làm choáng kẻ địch ở trung tâm giao điểm.",
            "skill2": "Xích vương: Quét xích đẩy lùi hoặc kéo đối thủ về phía bản thân gây sát thương làm chậm.",
            "skill3": "Đoạt mệnh xích: Nhảy bổ xuống cắm xích gây sát thương chuẩn cực mạnh, cường hóa bản thân khi hạ địch."
        },
        "build_recommend": {
            "items": ["Thương Longinus", "Giày Kiên Cường", "Phức Hợp Kiếm", "Nanh Fenrir", "Huân Chương Troy", "Nham Thuẫn"],
            "spell": "Tốc Biến / Trừng Phạt",
            "emblem": "Vực Hỗn Loạn - Đấu Khí"
        },
        "counters": ["Florentino", "Omen", "Hayate"],
        "synergies": ["Thane", "Krixi"]
    },
    {
        "id": "omen", "name": "Omen", "role": ["Warrior"], "lane": ["slayer"], "difficulty": "medium",
        "description": "Quỷ kiếm dạ xoa có khả năng solo 1v1 đường tà thần cực trâu bò nhờ khiên miễn thương và Sát vực khóa chết đối thủ.",
        "skills": {
            "passive": "Sát khí: Tích lũy sát khí tăng tốc đánh, gây sát thương chuẩn và giảm thời gian hồi chiêu.",
            "skill1": "Sát kiếm: Kéo kẻ địch về phía bản thân và làm chậm.",
            "skill2": "Sát niệm: Tạo lá chắn giảm sát thương nhận vào cực lớn và phản đòn đánh thường của địch.",
            "skill3": "Sát vực: Lao tới giam cầm kẻ địch trong vòng tròn ma pháp bất di bất dịch trong vài giây."
        },
        "build_recommend": {
            "items": ["Kiếm Fafnir", "Giày Kiên Cường", "Khiên Thất Truyền", "Giáp Gaia", "Nanh Fenrir", "Nham Thuẫn"],
            "spell": "Tốc Biến",
            "emblem": "Vực Hỗn Loạn - Đấu Khí"
        },
        "counters": ["Florentino", "Maloch", "Hayate"],
        "synergies": ["Tulen", "Liliana"]
    },
    {
        "id": "ilumia", "name": "Ilumia", "role": ["Mage"], "lane": ["mid"], "difficulty": "easy",
        "description": "Nữ thần ánh sáng có khả năng khống chế liên tục tầm xa và gọi thiên thạch giáng xuống đầu toàn bộ kẻ địch trên bản đồ.",
        "skills": {
            "passive": "Thần lực: Cường hóa chiêu Quả cầu ánh sáng sau mỗi 2 lần dùng chiêu thức.",
            "skill1": "Quả cầu ánh sáng: Phóng cầu ánh sáng gây sát thương phép tầm xa.",
            "skill2": "Trục xuất: Đẩy lùi toàn bộ kẻ địch xung quanh bản thân và tăng tốc chạy.",
            "skill3": "Thần trận: Gọi luồng ánh sáng thần thánh giáng xuống gây choáng diện rộng lên toàn bộ tướng địch bất kể ở đâu."
        },
        "build_recommend": {
            "items": ["Giày Thuật Sĩ", "Ngọc Đại Pháp Sư", "Trượng Băng", "Vương Miện Hecate", "Sách Truy Hồn", "Trượng Hỗn Mang"],
            "spell": "Tốc Biến",
            "emblem": "Tháp Quang Minh - Thần Hạ"
        },
        "counters": ["Nakroth", "Ngộ Không", "Zuka"],
        "synergies": ["Thane", "Grakk"]
    },
    {
        "id": "zip", "name": "Zip", "role": ["Support"], "lane": ["roam"], "difficulty": "hard",
        "description": "Quái thú háu ăn ngộ nghĩnh, có khả năng nuốt cả đồng đội, quái rừng để bảo vệ hoặc cướp bóc cực dị.",
        "skills": {
            "passive": "Béo tròn: Zip phồng to bản thân tăng kháng hiệu ứng và giảm sát thương nhận vào.",
            "skill1": "Khí đô: Bắn luồng khí liên kết gây choáng diện rộng cực kỳ khó chịu.",
            "skill2": "Khí thôn: Há to mồm nuốt đồng đội và quái rừng vào bụng để di chuyển bảo vệ an toàn.",
            "skill3": "Lăn lông lốc: Hóa thành quả cầu lăn cực nhanh hất tung và gây sát thương liên tục."
        },
        "build_recommend": {
            "items": ["Đại Địa Thần Khiên", "Giày Thuật Sĩ", "Khiên Thất Truyền", "Giáp Gaia", "Giáp Thống Khổ", "Huân Chương Troy"],
            "spell": "Cấp Cứu",
            "emblem": "Rừng Nguyên Sinh - Mộc Giáp"
        },
        "counters": ["Arum", "Aleister", "Baldum"],
        "synergies": ["Laville", "Violet"]
    },
    {
        "id": "ormarr", "name": "Ormarr", "role": ["Warrior", "Tank"], "lane": ["roam"], "difficulty": "easy",
        "description": "Cuồng chiến sĩ búa tạ hung tợn, nổi tiếng với khả năng đập choáng liên tục cực kỳ ngẫu nhiên và dũng mãnh.",
        "skills": {
            "passive": "Uy dũng: Tất cả sát thương của Ormarr đều có tỷ lệ gây choáng dựa trên máu tối đa kẻ địch.",
            "skill1": "Búa cuồng: Lao lên nện búa cường hóa đòn đánh thường hất tung đối thủ.",
            "skill2": "Búa tạ: Nện búa xuống đất tích lũy điểm nội tại để gây choáng chắc chắn phát tiếp theo.",
            "skill3": "Bão búa: Xoay búa liên tục quanh bản thân gây sát thương vật lý diện rộng liên tục."
        },
        "build_recommend": {
            "items": ["Đại Địa Thế Trận", "Giày Kiên Cường", "Thương Longinus", "Khiên Thất Truyền", "Giáp Gaia", "Nham Thuẫn"],
            "spell": "Tốc Biến",
            "emblem": "Rừng Nguyên Sinh - Trói Buộc"
        },
        "counters": ["Chaugnar", "Hayate", "Mina"],
        "synergies": ["Violet", "Krixi"]
    },
    {
        "id": "arduin", "name": "Arduin", "role": ["Warrior", "Tank"], "lane": ["slayer", "roam"], "difficulty": "easy",
        "description": "Hồn ma chiến giáp kiên cường, tấm khiên thép bất khuất luôn lao lên tiên phong mở combat cực mạnh.",
        "skills": {
            "passive": "Hồn huyết: Tự động hồi phục lượng lớn máu khi đánh thường lúc máu dưới 50%.",
            "skill1": "Hồn trảm: Vung rìu chém ra luồng khí gây sát thương vật lý và hất tung kẻ địch.",
            "skill2": "Hồn giáp: Tạo lá chắn ảo hấp thụ sát thương cực lớn và cường hóa đánh thường.",
            "skill3": "Câu hồn rìu: Phóng rìu cắm vào mục tiêu lao tới gây choáng và sát thương diện rộng."
        },
        "build_recommend": {
            "items": ["Đại Địa Thần Khiên / Thương Longinus", "Giày Kiên Cường", "Khiên Thất Truyền", "Giáp Gaia", "Giáp Thống Khổ", "Nham Thuẫn"],
            "spell": "Bộc Phá / Tốc Biến",
            "emblem": "Rừng Nguyên Sinh - Mộc Giáp"
        },
        "counters": ["Hayate", "Maloch", "Lauriel"],
        "synergies": ["Krixi", "Tulen"]
    },
    {
        "id": "chaugnar", "name": "Chaugnar", "role": ["Support", "Tank"], "lane": ["roam", "mid"], "difficulty": "easy",
        "description": "Voi thần tối cao giải khống chế toàn đội cực mạnh, khắc tinh cứng của toàn bộ tướng khống chế diện rộng.",
        "skills": {
            "passive": "Thủy triều: Mỗi khi dùng chiêu Thủy triều giúp giải khống chế tăng tốc chạy cho bản thân.",
            "skill1": "Thủy triều: Phun luồng nước gây sát thương phép và làm chậm kẻ địch tầm xa cực tốt.",
            "skill2": "Nước xoáy: Tạo luồng nước xoáy quanh bản thân gây sát thương phép cộng dồn liên tục.",
            "skill3": "Vực hỗn loạn: Hóa giải mọi khống chế cho toàn bộ đồng đội xung quanh lập tức và tăng tốc chạy."
        },
        "build_recommend": {
            "items": ["Đại Địa Mở Trói", "Giày Kiên Cường", "Giáp Gaia", "Sách Truy Hồn", "Khiên Thất Truyền", "Mặt Nạ Berith"],
            "spell": "Tốc Biến",
            "emblem": "Rừng Nguyên Sinh - Trói Buộc"
        },
        "counters": ["Hayate", "Elsu", "Violet"],
        "synergies": ["Gildur", "Darcy"]
    },
    {
        "id": "omega", "name": "Omega", "role": ["Tank"], "lane": ["roam"], "difficulty": "easy",
        "description": "Người máy chiến tranh kiêu hãnh, chuyên gia phá trụ cực mạnh và khống chế bảo kê chủ lực tuyệt hảo.",
        "skills": {
            "passive": "Chế độ hủy diệt: Chiêu thức gây sát thương đầy đủ lên công trình trụ địch.",
            "skill1": "Chế độ xung phong: Tạo lá chắn tăng tốc chạy cực nhanh và hất tung kẻ địch va phải.",
            "skill2": "Chế độ nghiền nát: Xoay vòng lá chắn gây sát thương vật lý diện rộng và choáng kẻ địch.",
            "skill3": "Hủy diệt diện rộng: Xoay tròn cánh tay robot cực đại hất văng mọi kẻ địch cản đường."
        },
        "build_recommend": {
            "items": ["Đại Địa Thần Khiên", "Giày Kiên Cường", "Khiên Thất Truyền", "Giáp Gaia", "Giáp Thống Khổ", "Huân Chương Troy"],
            "spell": "Tốc Biến",
            "emblem": "Rừng Nguyên Sinh - Mộc Giáp"
        },
        "counters": ["Hayate", "Maloch", "Lauriel"],
        "synergies": ["Violet", "Valhein"]
    },
    {
        "id": "taara", "name": "Taara", "role": ["Tank", "Warrior"], "lane": ["slayer", "roam"], "difficulty": "easy",
        "description": "Nữ búa thép lỳ lợm, hồi phục máu khủng khiếp nhất Liên Quân vô địch càn lướt quấy phá đội hình địch.",
        "skills": {
            "passive": "Chiến ý: Mất phần trăm máu tăng lượng lớn sát thương vật lý cho Taara.",
            "skill1": "Trối trăn: Nhảy bổ nện búa gây sát thương vật lý diện rộng và làm chậm.",
            "skill2": "Đập tan: Xoay búa 2 vòng gây sát thương vật lý liên tiếp cực đau.",
            "skill3": "Thân thể thép: Bật trạng thái siêu hồi phục máu tối đa cực trâu bò và tăng mạnh tốc chạy."
        },
        "build_recommend": {
            "items": ["Thương Longinus", "Giày Kiên Cường", "Áo Choàng Băng Giá", "Giáp Gaia", "Giáp Thống Khổ", "Nham Thuẫn"],
            "spell": "Bộc Phá / Tốc Biến",
            "emblem": "Rừng Nguyên Sinh - Mộc Giáp"
        },
        "counters": ["Max", "Arum", "Mganga"],
        "synergies": ["Tulen", "Liliana"]
    },
    {
        "id": "qi", "name": "Qi", "role": ["Warrior", "Assassin"], "lane": ["slayer", "jungle"], "difficulty": "medium",
        "description": "Nữ quyền sư mạnh mẽ sở hữu cú đấm húc tường chấn động bốc hơi toàn bộ chủ lực giao tranh hẹp.",
        "skills": {
            "passive": "Chân khí: Dùng chiêu thức cường hóa đòn đánh thường hồi máu và tăng mạnh giáp vật lý.",
            "skill1": "Truy tinh quyền: Lao thẳng đấm gây sát thương vật lý và hất tung kẻ địch cản đường.",
            "skill2": "Chấn thiên quyền: Đấm liên hoàn 5 phát làm giảm mạnh giáp vật lý của mục tiêu.",
            "skill3": "Hạo nhiên chưởng: Chưởng sóng âm đẩy lùi kẻ địch, hất văng vào tường gây choáng cực mạnh."
        },
        "build_recommend": {
            "items": ["Thương Longinus", "Giày Kiên Cường", "Phức Hợp Kiếm", "Nanh Fenrir", "Huân Chương Troy", "Giáp Hộ Mệnh"],
            "spell": "Tốc Biến / Trừng Phạt",
            "emblem": "Vực Hỗn Loạn - Đấu Khí"
        },
        "counters": ["Florentino", "Omen", "Riktor"],
        "synergies": ["Grakk", "Thane"]
    },
    {
        "id": "mina", "name": "Mina", "role": ["Tank"], "lane": ["roam"], "difficulty": "easy",
        "description": "Nữ hoàng lưỡi hái bóng đêm có khả năng khiêu khích trói chân toàn bộ đối thủ xung quanh chịu đòn.",
        "skills": {
            "passive": "Lưỡi hái hắc ám: Chịu sát thương hoặc đánh thường tích điểm quay lưỡi hái sát thương chuẩn hồi máu.",
            "skill1": "Lưỡi hái tử thần: Vung lưỡi hái gây sát thương vật lý dựa trên máu tối đa của bản thân.",
            "skill2": "Lưỡi hái xoay tròn: Quét xích kéo toàn bộ kẻ địch phía trước về gần bản thân.",
            "skill3": "Ma lực khiêu khích: Khiêu khích ép toàn bộ kẻ địch xung quanh đánh thường vào bản thân."
        },
        "build_recommend": {
            "items": ["Đại Địa Thần Khiên", "Giày Kiên Cường", "Khiên Thất Truyền", "Giáp Gaia", "Giáp Thống Khổ", "Nham Thuẫn"],
            "spell": "Tốc Biến",
            "emblem": "Rừng Nguyên Sinh - Mộc Giáp"
        },
        "counters": ["Hayate", "Lauriel", "Elsu"],
        "synergies": ["Violet", "Krixi"]
    },
    {
        "id": "zill", "name": "Zill", "role": ["Assassin", "Mage"], "lane": ["jungle"], "difficulty": "medium",
        "description": "Ma phong bão tố lướt chém liên hoàn dồn sát thương phép chí mạng, bay nhảy ảo diệu né tránh kỹ năng.",
        "skills": {
            "passive": "Bão tố: Tích lũy ấn gió gây thêm sát thương phép nổ mạnh và hồi lập tức chiêu Phong độn.",
            "skill1": "Phong đao: Phóng ra song đao gió bay đi bay về gây sát thương phép làm chậm mục tiêu.",
            "skill2": "Phong độn: Biến ảnh biến nhanh đến vị trí mới gây sát thương phép diện rộng.",
            "skill3": "Phong ba: Hóa thân vào cơn bão chém liên hoàn không thể bị chọn làm mục tiêu."
        },
        "build_recommend": {
            "items": ["Gươm Tận Thế", "Giày Phù Thủy", "Vương Miện Hecate", "Trượng Hỗn Mang", "Quyền Trượng Rhea", "Sách Thánh"],
            "spell": "Trừng Phạt",
            "emblem": "Vực Hỗn Loạn - Ma Tính"
        },
        "counters": ["Arum", "Aleister", "Thane"],
        "synergies": ["Alice", "Krixi"]
    },
    {
        "id": "natalya", "name": "Natalya", "role": ["Mage"], "lane": ["mid"], "difficulty": "easy",
        "description": "Hiểm họa hắc ám dồn combo bốc hơi đối thủ lập tức từ cấp độ 2, tia hủy diệt diện rộng khổng lồ.",
        "skills": {
            "passive": "Thần chú hắc ám: Chiêu thức trúng đích gây thêm sát thương phép cộng dồn liên tục.",
            "skill1": "Quả cầu hắc ám: Phóng 5 luồng ma pháp gây sát thương phép cực lớn tại giao điểm.",
            "skill2": "Quả cầu linh hồn: Ném cầu ma pháp gây chậm và choáng kẻ địch trúng chiêu tầm xa.",
            "skill3": "Tia sáng tử vong: Phun luồng năng lượng khổng lồ càn quét đội hình địch bất chấp khống chế."
        },
        "build_recommend": {
            "items": ["Giày Phù Thủy", "Trượng Bùng Nổ", "Vương Miện Hecate", "Trượng Hỗn Mang", "Sách Truy Hồn", "Sách Thánh"],
            "spell": "Tốc Biến",
            "emblem": "Tháp Quang Minh - Thần Hạ"
        },
        "counters": ["Nakroth", "Ngộ Không", "Murad"],
        "synergies": ["Grakk", "Thane"]
    },
    {
        "id": "mganga", "name": "Mganga", "role": ["Mage"], "lane": ["mid"], "difficulty": "easy",
        "description": "Tên hề tà ác ném độc rút máu liên tục cực kỳ ức chế gieo rắc độc tố chết chóc combat.",
        "skills": {
            "passive": "Tà độc: Đòn đánh thường và chiêu thức tích lũy ấn độc rút máu phép đối thủ liên tục.",
            "skill1": "Độc khí: Quăng bình thuốc độc tạo vùng đầm lầy độc tố làm chậm rút máu đối thủ.",
            "skill2": "Độc dược: Phóng độc hồi máu cho bản thân và đồng đội, gây độc lên đối phương.",
            "skill3": "Độc bùng nổ: Kích nổ toàn bộ ấn độc gây sát thương phép khổng lồ lên địch và hồi máu cho đồng minh."
        },
        "build_recommend": {
            "items": ["Giày Thuật Sĩ", "Ngọc Đại Pháp Sư", "Mặt Nạ Berith", "Trượng Băng", "Sách Truy Hồn", "Vương Miện Hecate"],
            "spell": "Tốc Biến / Tốc Hành",
            "emblem": "Vực Hỗn Loạn - Ma Tính"
        },
        "counters": ["Elsu", "Violet", "Natalya"],
        "synergies": ["Thane", "Toro"]
    },
    {
        "id": "zephys", "name": "Zephys", "role": ["Warrior", "Assassin"], "lane": ["jungle"], "difficulty": "easy",
        "description": "Lãnh chúa tể tử thần, càng ít máu càng trâu bò lỳ lợm lao vào càn quét đâm kích mục tiêu.",
        "skills": {
            "passive": "Bền bỉ: Zephys nhận thêm phần trăm miễn thương dựa trên lượng máu đã mất.",
            "skill1": "Đâm kích: Lao tới đâm thương gây sát thương vật lý cường hóa đòn đánh tiếp theo.",
            "skill2": "Liên kích: Đâm thương liên tục 3 phát hồi máu diện rộng và gây sát thương vật lý.",
            "skill3": "Không kích: Nhảy nện thương từ trên trời xuống hất tung và gây sát thương sấm sét lên nạn nhân."
        },
        "build_recommend": {
            "items": ["Rìu Leviathan", "Giày Kiên Cường", "Thương Longinus", "Phức Hợp Kiếm", "Nanh Fenrir", "Nham Thuẫn"],
            "spell": "Trừng Phạt",
            "emblem": "Vực Hỗn Loạn - Đấu Khí"
        },
        "counters": ["Arum", "Aleister", "Florentino"],
        "synergies": ["Alice", "Krixi"]
    },
    {
        "id": "arthur", "name": "Arthur", "role": ["Warrior", "Tank"], "lane": ["slayer", "roam"], "difficulty": "easy",
        "description": "Thần kiếm kiên định anh hùng quốc dân, vô cùng dễ chơi dễ trúng thưởng càn lướt cực trâu bò.",
        "skills": {
            "passive": "Uy nghiêm: Nhận lượng lớn giáp vật lý nội tại theo cấp độ.",
            "skill1": "Gươm dũng cảm: Tăng tốc chạy và lao bổ đấm kiếm choáng câm lặng mục tiêu.",
            "skill2": "Thần hộ thể: Triệu hồi các thanh kiếm bay quanh người gây sát thương vật lý liên tục.",
            "skill3": "Thần kiếm quyết: Nhảy bổ kiếm khổng lồ hất tung mục tiêu gây sát thương phép và sát thương chuẩn."
        },
        "build_recommend": {
            "items": ["Thương Longinus", "Giày Kiên Cường", "Áo Choàng Băng Giá", "Khiên Thất Truyền", "Giáp Gaia", "Nham Thuẫn"],
            "spell": "Bộc Phá / Tốc Biến",
            "emblem": "Rừng Nguyên Sinh - Mộc Giáp"
        },
        "counters": ["Hayate", "Maloch", "Florentino"],
        "synergies": ["Violet", "Krixi"]
    },
    {
        "id": "keera", "name": "Keera", "role": ["Assassin", "Mage"], "lane": ["jungle"], "difficulty": "hard",
        "description": "Nữ sát thủ bóng tối có khả năng đi xuyên tường địa hình đột kích dồn combo sát thương phép bốc hơi AD.",
        "skills": {
            "passive": "Linh hồn hắc ám: Chuyển đổi một phần sát thương gây ra thành lượng máu hồi phục.",
            "skill1": "Truy bóng: Lao tới tạo phân thân tấn công dồn sát thương và áp sát bất ngờ.",
            "skill2": "Tam giác quỷ: Tạo ma trận tam giác gây sát thương phép và không thể bị chọn làm mục tiêu.",
            "skill3": "Truy sát: Đi xuyên qua toàn bộ tường địa hình bản đồ tăng mạnh tốc chạy cực kỳ bá đạo."
        },
        "build_recommend": {
            "items": ["Gươm Tận Thế", "Giày Phù Thủy", "Vương Miện Hecate", "Trượng Hỗn Mang", "Quyền Trượng Rhea", "Sách Thánh"],
            "spell": "Trừng Phạt",
            "emblem": "Vực Hỗn Loạn - Ma Tính"
        },
        "counters": ["Arum", "Aleister", "Mina"],
        "synergies": ["Alice", "Xeniel"]
    },
    {
        "id": "tel-annas", "name": "Tel'Annas", "role": ["Marksman"], "lane": ["dragon"], "difficulty": "easy",
        "description": "Nữ vương tinh linh bắn mưa tên tầm siêu xa dồn sát thương vật lý hỗn hợp cực khủng combat.",
        "skills": {
            "passive": "Sao trời: Nhận thêm phần trăm công vật lý khi có đồng đội xung quanh bản thân.",
            "skill1": "Ưng nhãn: Cường hóa đòn đánh thường tăng tầm bắn xa và gây thêm sát thương phép thuật.",
            "skill2": "Ám tiễn: Bắn ra loạt tên nẩy làm chậm và gây sát thương vật lý tầm rộng.",
            "skill3": "Hỗn mang tiễn: Tụ lực bắn ra mũi tên khổng lồ tầm xa gây sát thương vật lý lớn và choáng."
        },
        "build_recommend": {
            "items": ["Thần Sa", "Giày Tốc Chiến", "Thánh Kiếm", "Song Đao Bão Táp", "Diệt Thần Cung", "Giáp Hộ Mệnh"],
            "spell": "Tốc Biến",
            "emblem": "Tháp Quang Minh - Luyện Kim"
        },
        "counters": ["Ngộ Không", "Quillen", "Zuka"],
        "synergies": ["Thane", "Baldum"]
    },
    {
        "id": "raz", "name": "Raz", "role": ["Mage", "Assassin"], "lane": ["mid"], "difficulty": "hard",
        "description": "Quyền vương đấm lửa cấu rỉa Cú đấm chân không siêu đau, đấm hất tung bốc hơi lập tức đối phương.",
        "skills": {
            "passive": "Lách và đấm: Di chuyển cực kỳ linh hoạt sau mỗi chiêu thức đánh thường đẩy lùi khống chế.",
            "skill1": "Cú đấm thăng thiên: Lao tới đấm thốc lên hất tung và gây sát thương phép.",
            "skill2": "Cú đấm chân không: Phóng luồng khí đấm lửa tầm xa làm chậm cực mạnh và giảm kháng phép địch.",
            "skill3": "Tả xung hữu đột: Lao thẳng đấm bộc phá đẩy lùi toàn bộ kẻ địch diện rộng trước mặt."
        },
        "build_recommend": {
            "items": ["Giày Phù Thủy", "Trượng Bùng Nổ", "Vương Miện Hecate", "Sách Truy Hồn", "Trượng Hỗn Mang", "Sách Thánh"],
            "spell": "Tốc Biến",
            "emblem": "Vực Hỗn Loạn - Ma Tính"
        },
        "counters": ["Thane", "Toro", "Chaugnar"],
        "synergies": ["Grakk", "Nakroth"]
    }
]

# Set initial default tier and trends fields
for hero in heroes_data:
    hero["tier"] = "A"
    hero["tier_reason"] = "Tướng đa năng, phù hợp với nhiều đội hình."
    hero["hot"] = False
    hero["hot_count"] = 0
    hero["thumbnail"] = f"https://lienquan.garena.vn/wp-content/themes/aov/images/heroes/{hero['id']}.jpg"
    hero["related_videos"] = []

# Ensure public dir exists
os.makedirs("public", exist_ok=True)
db_path = "public/heroes.json"

with open(db_path, "w", encoding="utf-8") as f:
    json.dump({"heroes": heroes_data}, f, ensure_ascii=False, indent=2)

print(f"Successfully generated {len(heroes_data)} heroes in {db_path}!")
