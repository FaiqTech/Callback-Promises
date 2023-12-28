//*Task1111 PROMISE
//?HOME TASKS:Görev 1: Kullanıcı Doğrulama İşlemi Tanım: Bu görev, kullanıcı adı ve şifre doğrulamasını içerir. Verilen kullanıcı adı ve şifrenin doğru olup olmadığını kontrol eder ve buna göre başarılı bir giriş mesajı veya hata mesajı döndürür. Gereksinimler: Kullanıcı adı ve şifre girdi olarak alınmalı.Doğrulama işlemi asenkron olarak yapılmalı.Başarılı doğrulama durumunda pozitif bir mesaj döndürülmeli Başarısız doğrulama durumunda hata mesajı döndürülmeli

// function validateUser(username, password) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (username === "user" && password === "1234") {
//         resolve("Giriş başarılı!");
//       } else {
//         reject("Kullanıcı adı veya şifre yanlış.");
//       }
//     }, 2000);
//   });
// }
// // Kullanımı:
// validateUser("user", "1234")
//   .then((message) => console.log(message))
//   .catch((error) => console.log(error));

//*Task1111 CALBACK
// function validateUserCallback(
//   username,
//   password,
//   successCallback,
//   errorCallback
// ) {
//   setTimeout(() => {
//     if (username === "user" && password === "1234") {
//       successCallback("Giriş başarılı!");
//     } else {
//       errorCallback("Kullanıcı adı veya şifre yanlış.");
//     }
//   }, 2000);
// }

// // Kullanımı:
// validateUserCallback(
//   "user",
//   "1234",
//   (message) => console.log(message),
//   (error) => console.log(error)
// );

//*Task2222 PROMISE
//?Görev 2: Hava Durumu Sorgulama Tanım: Bu görev, belirli bir şehir için hava durumunu sorgulamayı kapsar. Şehir adı verildiğinde, o şehre ait güncel hava durumu bilgisi getirilmelidir. Gereksinimler:Şehir adı girdi olarak alınmalı.Şehir için hava durumu bilgisi asenkron olarak sorgulanmalı.Mevcut şehir için hava durumu bilgisi sağlanmalı.Şehir bilgisi bulunamadığında hata mesajı döndürülmeli.

// function weatherInquiry(city, weather) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (city === "lankaran" && weather === "cold") {
//         resolve("Giriş başarılı!");
//       } else {
//         reject("Şehir bilgisi ve ya hava durumu bulunamadı.");
//       }
//     }, 2000);
//   });
// }
// // Kullanımı:
// weatherInquiry("lankaran", "cold")
//   .then((message) => console.log(message))
//   .catch((error) => console.log(error));

//*Task2222 CALBACK

// function weatherInquiryCallback(city, weather, successCallback, errorCallback) {
//   setTimeout(() => {
//     if (city === "lankaran" && weather === "cold") {
//       successCallback("Giriş başarılı!");
//     } else {
//       errorCallback("Şehir bilgisi ve ya hava durumu bulunamadı.");
//     }
//   }, 2000);
// }
// // Kullanımı:
// weatherInquiryCallback(
//   "lankaran",
//   "cold",
//   (message) => console.log(message),
//   (error) => console.log(error)
// );

//*task3333 PROMISE
//?Görev 3: Kitap Bilgisi Sorgulama Tanım: Bu görev, veritabanında mevcut olan kitaplar arasından belirli bir kitap adına göre sorgulama yapılmasını içerir. Kitabın yazarı ve yayın yılı gibi bilgileri getirir. Gereksinimler: Kitap adı girdi olarak alınmalı. Kitap bilgileri asenkron olarak veritabanından sorgulanmalı.Kitap bulunursa yazar ve yayın yılı bilgileri döndürülmeli.Kitap bulunamazsa uygun bir hata mesajı verilmeli.

// function bookInformation(author, graduationYear) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (author === "Daniel Defo" && graduationYear === "1999") {
//         resolve("Giriş başarılı!");
//       } else {
//         reject("Yazar ve yayın yılı bilgileri bulunamadı.");
//       }
//     }, 2000);
//   });
// }
// // Kullanımı:
// bookInformation("Daniel Defo", "1999")
//   .then((message) => console.log(message))
//   .catch((error) => console.log(error));

//*  task3333  CALBACK

// function bookInformation(
//   author,
//   graduationYear,
//   successCallback,
//   errorCallback
// ) {
//   setTimeout(() => {
//     if (author === "Daniel Defo" && graduationYear === "1999") {
//       successCallback("Giriş başarılı!");
//     } else {
//       errorCallback("Yazar ve yayın yılı bilgileri bulunamadı.");
//     }
//   }, 2000);
// }
// // Kullanımı:
// bookInformation(
//   "Daniel Defo",
//   "1999",
//   (message) => console.log(message),
//   (error) => console.log(error)
// );

//*task4444 PROMISE
//?Görev 4: Kullanıcı Kaydı ve E-posta Bildirimi Tanım: Bu görev, yeni bir kullanıcı kaydı ve bu kaydı takiben bir hoş geldin e-postası gönderilmesini kapsar. Kullanıcının adı ve e-posta adresi kaydedilmeli ve ona bir e-posta gönderilmelidir. Gereksinimler:Kullanıcı adı ve e-posta adresi girdi olarak alınmalı.Kullanıcı kaydı ve e-posta gönderimi asenkron olarak gerçekleştirilmeli.Kayıt işlemi başarılı olduğunda, kullanıcıya e-posta gönderilmeli.İşlem sırasında oluşan hatalar uygun şekilde ele alınmalı.

// function userRegistration(userName, email) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (userName === "Faig" && email === "info@domain.com") {
//         resolve("Kullanıcı adı ve e-posta adresine girildi");
//       } else {
//         reject(
//           "Kullanıcı kaydı ve e-posta gönderimi asenkron olarak gerçekleştirilmeli."
//         );
//       }
//     }, 2000);
//   });
// }
// // Kullanımı:
// userRegistration("Faig", "info@domain.com")
//   .then((message) => console.log(message))
//   .catch((error) => console.log(error));

//*  task4444  CALBACK

// function userRegistration(userName, email, successCallback, errorCallback) {
//   setTimeout(() => {
//     if (userName === "Faig" && email === "info@domain.com") {
//       successCallback("Kullanıcı adı ve e-posta adresine girildi");
//     } else {
//       errorCallback(
//         "Kullanıcı kaydı ve e-posta gönderimi asenkron olarak gerçekleştirilmeli."
//       );
//     }
//   }, 2000);
// }
// // Kullanımı:
// userRegistration(
//   "Faig",
//   "info@domain.com",
//   (message) => console.log(message),
//   (error) => console.log(error)
// );

//*task 5555 PROMISE
//?Görev 5: Ürün Fiyat Kontrolü ve İndirim Uygulaması Tanım: Bu görev, belirli bir ürünün fiyatını kontrol etmeyi ve belirli koşullar altında indirim uygulamayı içerir. Ürün ID'si verildiğinde, ürünün fiyatını kontrol eder ve uygunsa indirim yapar. Gereksinimler: Ürün ID'si girdi olarak alınmalı.Ürün fiyatı asenkron olarak sorgulanmalı.Fiyat belirli bir eşiği aşıyorsa indirim uygulanmalı.İndirim uygulanamıyorsa uygun bir hata mesajı verilmeli.

// function priceDiscount(productId, productPrice) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (productId === "ASIN:B006GWo5WK" && productPrice === "150$") {
//         resolve("Fiyat belirli bir eşiği aşıyor, indirim uygulaniyor");
//       } else {
//         reject("İndirim uygulanamıyor.");
//       }
//     }, 2000);
//   });
// }
// // Kullanımı:
// priceDiscount("ASIN:B006GWo5WK", "150%")
//   .then((message) => console.log(message))
//   .catch((error) => console.log(error));

//*  task5555  CALBACK

// function priceDiscount(productId,productPrice successCallback, errorCallback) {
//   setTimeout(() => {
//     if (productId === "ASIN:B006GWo5WK" && productPrice === "150%") {
//       successCallback("Fiyat belirli bir eşiği aşıyor, indirim uygulaniyor");
//     } else {
//       errorCallback(
//         "İndirim uygulanamıyor."
//       );
//     }
//   }, 2000);
// }
// // Kullanımı:
// priceDiscount(
//   "ASIN:B006GWo5WK",
//   "150$",
//   (message) => console.log(message),
//   (error) => console.log(error)
// );

//*task 6666 PROMISE
//?Görev 6: Stok Durumu Kontrolü Tanım: Bu görev, belirli bir ürünün stok durumunu kontrol etmeyi içerir. Verilen ürün ID'sine göre stokta olup olmadığını kontrol eder ve buna göre bilgi sağlar.Gereksinimler:Ürün ID'si girdi olarak alınmalı.Stok durumu asenkron olarak kontrol edilmeli.Ürün stokta varsa mevcut miktarla ilgili bilgi verilmeli.Stokta olmayan ürünler için hata mesajı döndürülmeli.

// function stockStatus(stockId, quantity) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (stockId === "NYSE American: ID" && quantity === "60") {
//         resolve("Stocda mevcut miktarda vardir");
//       } else {
//         reject("Stokta olmayan üründur.");
//       }
//     }, 2000);
//   });
// }
// // Kullanımı:
// stockStatus("NYSE American: ID", "60")
//   .then((message) => console.log(message))
//   .catch((error) => console.log(error));

//*  task6666  CALBACK

// function stockStatus(productId, productPrice, successCallback, errorCallback) {
//   setTimeout(() => {
//     if (productId === "NYSE American: ID" && productPrice === "60") {
//       successCallback("Stokda mevcut miktarda vardir");
//     } else {
//       errorCallback("Stokta olmayan üründur.");
//     }
//   }, 2000);
// }
// // Kullanımı:
// stockStatus(
//   "NYSE American: ID",
//   "60",
//   (message) => console.log(message),
//   (error) => console.log(error)
// );

//*  task7777 PROMISE
//?Görev 7: Öğrenci Not Ortalaması Hesaplama Tanım: Bu görev, belirli bir öğrenci ID'si için not ortalamasını hesaplamayı kapsar. Öğrencinin notlarına göre ortalaması hesaplanır ve döndürülür.Gereksinimler:Öğrenci ID'si girdi olarak alınmalı.Not ortalaması asenkron olarak hesaplanmalı.Öğrenci bulunursa hesaplanan ortalama döndürülmeli.Öğrenci bulunamazsa hata mesajı verilmeli.

// function calculateAverage(studentId) {
//   const studentGrades = {
//     123: [70, 85, 90],
//     456: [80, 75, 88],
//     // diğer öğrenciler...
//   };

//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (studentGrades[studentId]) {
//         const grades = studentGrades[studentId];
//         const average =
//           grades.reduce((acc, cur) => acc + cur, 0) / grades.length;
//         resolve(`Öğrencinin not ortalaması: ${average}`);
//       } else {
//         reject("Öğrenci bulunamadı.");
//       }
//     }, 2000);
//   });
// }

// // Kullanımı:
// calculateAverage(123)
//   .then((message) => console.log(message))
//   .catch((error) => console.log(error));

//*TASk 7777 CALBACK

// function calculateAverageCallback(studentId, callback) {
//   const studentGrades = {
//     123: [70, 85, 90],
//     456: [80, 75, 88],
//     // diğer öğrenciler...
//   };

//   setTimeout(() => {
//     if (studentGrades[studentId]) {
//       const grades = studentGrades[studentId];
//       const average = grades.reduce((acc, cur) => acc + cur, 0) / grades.length;
//       callback(null, `Öğrencinin not ortalaması: ${average}`);
//     } else {
//       callback("Öğrenci bulunamadı.", null);
//     }
//   }, 2000);
// }

// // Kullanımı:
// calculateAverageCallback(123, (error, message) => {
//   if (error) {
//     console.log(error);
//   } else {
//     console.log(message);
//   }
// });

//*TASK 8888  PROMISE
//?Görev 8: Rezervasyon Durumu Kontrolü Tanım: Bu görev, belirli bir tarih için restoran rezervasyonunun müsait olup olmadığını kontrol eder. Verilen tarihe göre rezervasyonun mümkün olup olmadığı belirlenir. Gereksinimler:Rezervasyon tarihi girdi olarak alınmalı.Tarih için rezervasyon durumu asenkron olarak kontrol edilmeli.Tarih müsaitse pozitif bir yanıt verilmeli.Tarih müsait değilse uygun bir hata mesajı döndürülmeli.

// function reservationStatus(date) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (date === "31december") {
//         resolve("Tarih müsait");
//       } else {
//         reject("Tarih müsait değil.");
//       }
//     }, 2000);
//   });
// }
// // Kullanımı:
// reservationStatus("31december")
//   .then((message) => console.log(message))
//   .catch((error) => console.log(error));

//*TASK 8888  CALBACK

// function reservationStatus(date, successCallback, errorCallback) {
//   setTimeout(() => {
//     if (date === "31december") {
//       successCallback("Tarih müsait");
//     } else {
//       errorCallback("Tarih müsait değil.");
//     }
//   }, 2000);
// }
// // Kullanımı:
// reservationStatus(
//   "31december",
//   (message) => console.log(message),
//   (error) => console.log(error)
// );

//*TASK 9999  PROMISE
//?Görev 9: Kredi Skoru Kontrolü Tanım: Bu görev, belirli bir kullanıcının kredi skorunu kontrol etmeyi içerir. Kullanıcının kredi skoruna göre uygun bir yanıt verilir.Gereksinimler:Kullanıcı ID'si girdi olarak alınmalı.Kredi skoru asenkron olarak sorgulanmalı.Skor yeterliyse pozitif bir yanıt verilmeli.Skor yetersizse uygun bir hata mesajı döndürülmeli.

// function creditScore(userId, userScore) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (userId === "Faig" && userScore === "1-1900") {
//         resolve("Kullanıcı ID'si girdi ");
//       } else {
//         reject("Skor yetersiz.");
//       }
//     }, 2000);
//   });
// }

// // Kullanımı:
// creditScore("Faig", "1-1900")
//   .then((message) => console.log(message))
//   .catch((error) => console.log(error));

//*  task999 CALBACK

// function creditScore(userId, userScore, successCallback, errorCallback) {
//   setTimeout(() => {
//     if (userId === "Faig" && userScore === "1-1900") {
//       successCallback("Kullanıcı ID'si girdi");
//     } else {
//       errorCallback("Skor yetersiz.");
//     }
//   }, 2000);
// }
// // Kullanımı:
// creditScore(
//   "Faig",
//   "1-1900",
//   (message) => console.log(message),
//   (error) => console.log(error)
// );

//*TASK 10  PROMISE
//?Görev 10: Film Bilgisi Sorgulama.Tanım: Bu görev, veritabanındaki filmler arasından belirli bir film adına göre sorgulama yapmayı içerir. Film bulunursa ilgili bilgiler döndürülür.Gereksinimler:Film adı girdi olarak alınmalı.Film bilgileri asenkron olarak sorgulanmalı.Film bulunursa yıl ve yönetmen gibi bilgiler döndürülmeli.Film bulunamazsa uygun bir hata mesajı verilmeli.

// function movieInformation(filmYear, filmDirector) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (filmYear === "1956" && filmDirector === "Hüseyn Seyidzadə") {
//         resolve("Hüseyn Seyidzadə,O olmasın, bu olsun ,1956");
//       } else {
//         reject("Film bulunamadi");
//       }
//     });
//   }, 200);
// }
// // Kullanımı:
// movieInformation("1956", "Hüseyn Seyidzadə")
//   .then((message) => console.log(message))
//   .catch((error) => console.log(error));

//*TASK 10  CALBACK

// function movieInformation(
//   filmYear,
//   filmDirector,
//   successCallback,
//   errorCallback
// ) {
//   setTimeout(() => {
//     if (filmYear === "1956" && filmDirector === "Hüseyn Seyidzadə") {
//       successCallback("Hüseyn Seyidzadə,O olmasın, bu olsun ,1956");
//     } else {
//       errorCallback("Film bilgisi hatalı.");
//     }
//   }, 2000);
// }
// // Kullanımı:
// movieInformation(
//   "1956",
//   "Hüseyn Seyidzadə",
//   (message) => console.log(message),
//   (error) => console.log(error)
// );
