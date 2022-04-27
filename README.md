# mini-project-back-end

API Documentation:

1. GET /Film
  Response : [
    {
        "id": 43,
        "image": "https://dafunda.com/wp-content/uploads/2017/07/gg-min.jpg",
        "namaFilm": "One Punch Man ",
        "sinopsis": "One Punch Man berkisah tentang Saitama, seorang pahlawan super yang dapat mengalahkan lawan dengan satu pukulan tetapi berusaha untuk menemukan lawan yang layak setelah bosan dengan kurangnya tantangan karena kekuatannya yang luar biasa",
        "createdAt": "2022-04-26T13:42:45.316Z",
        "updatedAt": "2022-04-26T13:42:45.316Z"
    }
]

  Post/film/add   
     Request:
   {
        "id": 44,
        "image": "https://dafunda.com/wp-content/uploads/2017/07/gg-min.jpg",
        "namaFilm": "Harry Potter and the Sorcerer's Stone",
        "sinopsis": "Secara garis besar, Harry Potter and the Sorcerer's Stone berkisah tentang kehidupan penyihir muda bernama Harry Potter. Film ini juga berfokus pada konflik antara Harry dengan penyihir jahat bernama Voldemort yang telah membunuh kedua orang tuanya.",
        "createdAt": "2022-04-26T13:45:29.550Z",
        "updatedAt": "2022-04-26T13:45:29.550Z"
    }

    Response: {
    "name": "SequelizeDatabaseError",
    "parent": {
        "length": 99,
        "name": "error",
        "severity": "ERROR",
        "code": "22001",
        "file": "varchar.c",
        "line": "635",
        "routine": "varchar",
        "sql": "INSERT INTO \"films\" (\"id\",\"image\",\"namaFilm\",\"sinopsis\",\"createdAt\",\"updatedAt\") VALUES (DEFAULT,$1,$2,$3,$4,$5) RETURNING \"id\",\"image\",\"namaFilm\",\"sinopsis\",\"createdAt\",\"updatedAt\";",
        "parameters": [
            "https://dafunda.com/wp-content/uploads/2017/07/gg-min.jpg",
            "Harry Potter and the Sorcerer's Stone",
            "Secara garis besar, Harry Potter and the Sorcsssssssssssssssssssssssssssssssssssssssssssssssssssssssssssserer's Stone berkisah tentang kehidupan penyihir muda bernama Harry Potter. Film ini juga berfokus pada konflik antara Harry dengan penyihir jahat bernama Voldemort yang telah membunuh kedua orang tuanya.",
            "2022-04-26 13:50:21.966 +00:00",
            "2022-04-26 13:50:21.966 +00:00"
        ]
    },
    "original": {
        "length": 99,
        "name": "error",
        "severity": "ERROR",
        "code": "22001",
        "file": "varchar.c",
        "line": "635",
        "routine": "varchar",
        "sql": "INSERT INTO \"films\" (\"id\",\"image\",\"namaFilm\",\"sinopsis\",\"createdAt\",\"updatedAt\") VALUES (DEFAULT,$1,$2,$3,$4,$5) RETURNING \"id\",\"image\",\"namaFilm\",\"sinopsis\",\"createdAt\",\"updatedAt\";",
        "parameters": [
            "https://dafunda.com/wp-content/uploads/2017/07/gg-min.jpg",
            "Harry Potter and the Sorcerer's Stone",
            "Secara garis besar, Harry Potter and the Sorcsssssssssssssssssssssssssssssssssssssssssssssssssssssssssssserer's Stone berkisah tentang kehidupan penyihir muda bernama Harry Potter. Film ini juga berfokus pada konflik antara Harry dengan penyihir jahat bernama Voldemort yang telah membunuh kedua orang tuanya.",
            "2022-04-26 13:50:21.966 +00:00",
            "2022-04-26 13:50:21.966 +00:00"
        ]
    },
    "sql": "INSERT INTO \"films\" (\"id\",\"image\",\"namaFilm\",\"sinopsis\",\"createdAt\",\"updatedAt\") VALUES (DEFAULT,$1,$2,$3,$4,$5) RETURNING \"id\",\"image\",\"namaFilm\",\"sinopsis\",\"createdAt\",\"updatedAt\";",
    "parameters": [
        "https://dafunda.com/wp-content/uploads/2017/07/gg-min.jpg",
        "Harry Potter and the Sorcerer's Stone",
        "Secara garis besar, Harry Potter and the Sorcsssssssssssssssssssssssssssssssssssssssssssssssssssssssssssserer's Stone berkisah tentang kehidupan penyihir muda bernama Harry Potter. Film ini juga berfokus pada konflik antara Harry dengan penyihir jahat bernama Voldemort yang telah membunuh kedua orang tuanya.",
        "2022-04-26 13:50:21.966 +00:00",
        "2022-04-26 13:50:21.966 +00:00"
    ]
}
    
    

   Post/film/edit/44

     {
        "id": 44,
        "image": "https://dafunda.com/wp-content/uploads/2017/07/gg-min.jpg",
        "namaFilm": "Harry Potter and the Sorcerer's Stone",
        "sinopsis": "Secara garis besar, Harry Potter and the Sorcerer's Stone berkisah tentang kehidupan penyihir muda bernama Harry Potter. Film ini juga berfokus pada konflik antara Harry dengan penyihir jahat bernama Voldemort yang telah membunuh kedua orang tuanya.",
        "createdAt": "2022-04-26T13:45:29.550Z",
        "updatedAt": "2022-04-26T13:45:29.550Z"
    }


    
  