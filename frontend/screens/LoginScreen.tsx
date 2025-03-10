import React from "react";
import { Button, Input, VStack, Text, Image, HStack, Pressable } from "@gluestack-ui v2";
import { SafeAreaView } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

// Ekranlar için parametre listesini tanımlayın
type RootStackParamList = {
  Login: undefined;
  Register: undefined;
  ForgotPassword: undefined;
  Dashboard: undefined;
};

// Türleri her ekrana ekleyin
type LoginScreenProps = NativeStackScreenProps<RootStackParamList, "Login">;
type RegisterScreenProps = NativeStackScreenProps<RootStackParamList, "Register">;
type ForgotPasswordScreenProps = NativeStackScreenProps<RootStackParamList, "ForgotPassword">;

const LoginScreen: React.FC<LoginScreenProps> = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "#fff" }}>
      <VStack space={4} alignItems="center" w="80%">
        {/* Kiel Logo */}
        <Image source={require("../assets/kiel-logo.png")} style={{ width: 150, height: 150, resizeMode: "contain" }} />
        
        {/* Hoş Geldiniz Mesajı */}
        <Text fontSize="lg" fontWeight="bold">Hoş Geldiniz!</Text>
        <Text fontSize="sm" color="gray.500">Aileniz için en iyi desteği alın</Text>
        
        {/* Giriş Formu */}
        <Input placeholder="E-posta" w="100%" />
        <Input placeholder="Şifre" type="password" w="100%" />
        
        {/* Şifremi Unuttum */}
        <Pressable onPress={() => navigation.navigate("ForgotPassword")}>
          <Text fontSize="sm" color="blue.500" alignSelf="flex-end">Şifremi Unuttum?</Text>
        </Pressable>
        
        {/* Giriş Yap Butonu */}
        <Button w="100%" onPress={() => navigation.navigate("Dashboard")}>Giriş Yap</Button>
        
        {/* Sosyal Medya ile Giriş */}
        <Text fontSize="sm" color="gray.400">veya</Text>
        <HStack space={4}>
          <Button variant="outline" w="45%">Google ile Giriş</Button>
          <Button variant="outline" w="45%">Apple ile Giriş</Button>
        </HStack>
        
        {/* Kayıt Ol Linki */}
        <HStack space={1}>
          <Text fontSize="sm">Hesabın yok mu?</Text>
          <Pressable onPress={() => navigation.navigate("Register")}> 
            <Text fontSize="sm" color="blue.500">Kayıt Ol</Text>
          </Pressable>
        </HStack>
      </VStack>
    </SafeAreaView>
  );
};

const RegisterScreen: React.FC<RegisterScreenProps> = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "#fff" }}>
      <VStack space={4} alignItems="center" w="80%">
        <Text fontSize="lg" fontWeight="bold">Kayıt Ol</Text>
        <Input placeholder="Adınız" w="100%" />
        <Input placeholder="E-posta" w="100%" />
        <Input placeholder="Şifre" type="password" w="100%" />
        <Button w="100%" onPress={() => navigation.navigate("Dashboard")}>Kayıt Ol</Button>
      </VStack>
    </SafeAreaView>
  );
};

const ForgotPasswordScreen: React.FC<ForgotPasswordScreenProps> = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "#fff" }}>
      <VStack space={4} alignItems="center" w="80%">
        <Text fontSize="lg" fontWeight="bold">Şifremi Unuttum</Text>
        <Input placeholder="E-posta" w="100%" />
        <Button w="100%" onPress={() => alert("Şifre sıfırlama bağlantısı gönderildi.")}>Gönder</Button>
      </VStack>
    </SafeAreaView>
  );
};

export { LoginScreen, RegisterScreen, ForgotPasswordScreen };
