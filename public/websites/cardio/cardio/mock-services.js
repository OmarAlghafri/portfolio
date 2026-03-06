/**
 * Mock Services for Cardio AI Website - Preview/Demo Mode
 * This file replaces all backend API calls with simulated local data
 * No backend connection required - fully functional preview mode
 */

// ==================== Mock Data Store ====================
const MockDataStore = {
    // Mock Users Database
    users: [
        {
            id: 1,
            name: 'أحمد محمد',
            email: 'user@example.com',
            password: 'password123',
            phone: '+966 50 123 4567',
            birth_date: '1990-05-15',
            gender: 'male',
            profession: 'Teacher',
            role: 'user'
        },
        {
            id: 2,
            name: 'Sarah Johnson',
            email: 'user.en@example.com',
            password: 'password123',
            phone: '+1 555 123 4567',
            birth_date: '1992-08-20',
            gender: 'female',
            profession: 'Nurse',
            role: 'user'
        },
        {
            id: 3,
            name: 'د. محمد عبدالله',
            email: 'doctor@example.com',
            password: 'doctor123',
            phone: '+966 50 987 6543',
            birth_date: '1985-03-10',
            gender: 'male',
            profession: 'Cardiologist',
            role: 'doctor'
        },
        {
            id: 4,
            name: 'Admin User',
            email: 'admin@example.com',
            password: 'admin123',
            phone: '+966 50 000 0000',
            birth_date: '1988-01-01',
            gender: 'male',
            profession: 'System Administrator',
            role: 'admin'
        }
    ],

    // Mock Analysis Results
    analysisResults: [
        {
            id: 1,
            filename: 'chest_xray_001.jpg',
            diagnosis: 'cardiomegaly',
            confidence: '94.5',
            timestamp: '2024-03-01T10:30:00Z',
            image_url: 'https://via.placeholder.com/400x400/5D5CDE/FFFFFF?text=X-Ray+1'
        },
        {
            id: 2,
            filename: 'chest_xray_002.jpg',
            diagnosis: 'normal',
            confidence: '97.2',
            timestamp: '2024-03-02T14:15:00Z',
            image_url: 'https://via.placeholder.com/400x400/0463FA/FFFFFF?text=X-Ray+2'
        },
        {
            id: 3,
            filename: 'chest_xray_003.jpg',
            diagnosis: 'cardiomegaly',
            confidence: '89.8',
            timestamp: '2024-03-03T09:45:00Z',
            image_url: 'https://via.placeholder.com/400x400/FF6B6B/FFFFFF?text=X-Ray+3'
        }
    ],

    // Mock Medical Reports
    reports: [
        {
            id: 1,
            title: 'تقرير تحليل أشعة الصدر',
            priority: 'urgent',
            summary: 'تم اكتشاف تضخم في عضلة القلب بنسبة تضخم متوسطة',
            content: 'بعد تحليل الصورة المرفوعة باستخدام الذكاء الاصطناعي، تبين وجود تضخم في عضلة القلب بنسبة 94.5%. نوصي بمراجعة طبيب القلب لإجراء الفحوصات اللازمة.',
            recommendations: 'مراجعة طبيب القلب، إجراء تخطيط قلب، إجراء فحص صدى القلب',
            specialty: 'Cardiology',
            hospital: 'مستشفى الملك فيصل التخصصي',
            doctor_name: 'د. محمد عبدالله',
            created_at: '2024-03-01T11:00:00Z'
        },
        {
            id: 2,
            title: 'تقرير متابعة دورية',
            priority: 'normal',
            summary: 'نتائج طبيعية - لا يوجد تضخم في القلب',
            content: 'تحليل الصورة أظهر نتائج طبيعية. لا يوجد علامات على تضخم عضلة القلب. نوصي بالاستمرار في المتابعة الدورية.',
            recommendations: 'متابعة دورية بعد 6 أشهر',
            specialty: 'Cardiology',
            hospital: 'مستشفى الملك خالد الجامعي',
            doctor_name: 'د. أحمد السالم',
            created_at: '2024-03-02T15:00:00Z'
        },
        {
            id: 3,
            title: 'Cardiac Analysis Report',
            priority: 'warning',
            summary: 'Mild cardiomegaly detected - follow-up recommended',
            content: 'AI analysis indicates mild cardiomegaly with 89.8% confidence. Clinical correlation and follow-up with a cardiologist is recommended.',
            recommendations: 'Cardiology consultation, ECG, Echocardiogram',
            specialty: 'Cardiology',
            hospital: 'New York General Hospital',
            doctor_name: 'Dr. Sarah Wilson',
            created_at: '2024-03-03T10:30:00Z'
        }
    ],

    // Chat Responses (Arabic)
    chatResponsesAr: {
        default: [
            'شكراً لسؤالك! كيف يمكنني مساعدتك اليوم؟',
            'أهلاً بك! أنا مساعدك الطبي الذكي. ماذا تود أن تعرف؟',
            'مرحباً! أنا هنا للإجابة على استفساراتك الطبية.'
        ],
        cardiomegaly: [
            'تضخم عضلة القلب هو حالة طبية تتضخم فيها عضلة القلب. يمكن أن يحدث بسبب ارتفاع ضغط الدم أو أمراض صمامات القلب. أنصحك بمراجعة طبيب قلب متخصص.',
            'تضخم القلب قد يكون نتيجة لعدة أسباب منها ارتفاع ضغط الدم أو أمراض الشرايين التاجية. التشخيص المبكر مهم جداً للعلاج الناجح.'
        ],
        symptoms: [
            'أعراض مشاكل القلب قد تشمل: ضيق التنفس، ألم الصدر، الخفقان، التعب والإرهاق. إذا شعرت بأي من هذه الأعراض، استشر طبيباً.',
            'من المهم مراقبة أعراضك وتسجيلها. الأعراض الشائعة تشمل ضيق التنفس عند بذل مجهود والتعب العام.'
        ],
        prevention: [
            'للوقاية من أمراض القلب: حافظ على وزن صحي، مارس الرياضة بانتظام، اتبع نظاماً غذائياً متوازناً، تجنب التدخين، وراجع الطبيب دورياً.',
            'الوقاية خير من العلاج! النظام الغذائي الصحي والنشاط البدني المنتظم هما أساس صحة القلب.'
        ],
        test: [
            'اختبارات القلب تشمل: تخطيط القلب (ECG)، فحص صدى القلب (Echocardiogram)، اختبار الجهد، وقسطرة القلب. طبيبك سيحدد الأنسب لحالتك.'
        ]
    },

    // Chat Responses (English)
    chatResponsesEn: {
        default: [
            'Thank you for your question! How can I help you today?',
            'Welcome! I am your smart medical assistant. What would you like to know?',
            'Hello! I am here to answer your medical questions.'
        ],
        cardiomegaly: [
            'Cardiomegaly is a condition where the heart muscle becomes enlarged. It can be caused by high blood pressure or heart valve diseases. I recommend consulting a cardiologist.',
            'Heart enlargement may result from high blood pressure or coronary artery diseases. Early diagnosis is crucial for successful treatment.'
        ],
        symptoms: [
            'Heart problem symptoms may include: shortness of breath, chest pain, palpitations, fatigue. If you experience any of these, consult a doctor.',
            'It\'s important to monitor and record your symptoms. Common symptoms include shortness of breath during exertion and general fatigue.'
        ],
        prevention: [
            'To prevent heart disease: maintain a healthy weight, exercise regularly, follow a balanced diet, avoid smoking, and visit your doctor regularly.',
            'Prevention is better than cure! A healthy diet and regular physical activity are the foundation of heart health.'
        ],
        test: [
            'Heart tests include: ECG, Echocardiogram, Stress Test, and Cardiac Catheterization. Your doctor will determine which is best for you.'
        ]
    },

    // Statistics
    stats: {
        total_images: 1247,
        positive_cases: 389,
        negative_cases: 858,
        average_confidence: 93.5,
        total_reports: 156,
        urgent_reports: 23,
        normal_reports: 133
    },

    // User Analysis History (session-based)
    userAnalysisHistory: [],

    // Chat Sessions (session-based)
    chatSessions: []
};

// ==================== Session Management ====================
const SessionManager = {
    getToken: function() {
        return localStorage.getItem('cardio_token');
    },

    setToken: function(token) {
        localStorage.setItem('cardio_token', token);
    },

    getUserData: function() {
        const data = localStorage.getItem('cardio_user_data');
        return data ? JSON.parse(data) : null;
    },

    setUserData: function(userData) {
        localStorage.setItem('cardio_user_data', JSON.stringify(userData));
    },

    clearSession: function() {
        localStorage.removeItem('cardio_token');
        localStorage.removeItem('cardio_user_data');
    },

    isAuthenticated: function() {
        return this.getToken() !== null;
    }
};

// ==================== Mock API Service ====================
const MockAPI = {
    // Simulate network delay
    simulateDelay: function(ms = 800) {
        return new Promise(resolve => setTimeout(resolve, ms));
    },

    // Authentication
    login: async function(email, password) {
        await this.simulateDelay(1000);

        const user = MockDataStore.users.find(
            u => u.email === email && u.password === password
        );

        if (!user) {
            return { success: false, message: 'Invalid email or password' };
        }

        const token = `mock_token_${user.id}_${Date.now()}`;
        const userData = { ...user };
        delete userData.password;

        SessionManager.setToken(token);
        SessionManager.setUserData(userData);

        return {
            success: true,
            access_token: token,
            user: userData,
            message: 'Login successful'
        };
    },

    register: async function(name, email, password) {
        await this.simulateDelay(1000);

        const existingUser = MockDataStore.users.find(u => u.email === email);

        if (existingUser) {
            return { success: false, message: 'Email already registered' };
        }

        const newUser = {
            id: MockDataStore.users.length + 1,
            name: name,
            email: email,
            password: password,
            role: 'user'
        };

        MockDataStore.users.push(newUser);

        return {
            success: true,
            message: 'Account created successfully'
        };
    },

    logout: async function() {
        await this.simulateDelay(500);
        SessionManager.clearSession();
        return { success: true };
    },

    getUserData: async function() {
        await this.simulateDelay(500);
        const userData = SessionManager.getUserData();
        if (!userData) {
            return null;
        }
        return userData;
    },

    updateUser: async function(data) {
        await this.simulateDelay(1000);
        const userData = SessionManager.getUserData();
        if (!userData) {
            return { success: false, message: 'Not authenticated' };
        }

        Object.assign(userData, data);
        SessionManager.setUserData(userData);

        return {
            success: true,
            user: userData,
            message: 'Profile updated successfully'
        };
    },

    // Analysis
    analyzeImage: async function(file) {
        // Simulate longer analysis delay
        await new Promise(resolve => setTimeout(resolve, 3000));

        const isCardiomegaly = Math.random() > 0.5;
        const confidence = (85 + Math.random() * 14).toFixed(1);

        const result = {
            id: MockDataStore.userAnalysisHistory.length + 1,
            filename: file.name,
            diagnosis: isCardiomegaly ? 'cardiomegaly' : 'normal',
            confidence: confidence,
            timestamp: new Date().toISOString(),
            image_url: URL.createObjectURL(file),
            success: true
        };

        MockDataStore.userAnalysisHistory.push(result);

        return result;
    },

    getAnalysisHistory: async function() {
        await this.simulateDelay(500);
        return MockDataStore.userAnalysisHistory;
    },

    getUserStats: async function() {
        await this.simulateDelay(500);
        const userHistory = MockDataStore.userAnalysisHistory;
        return {
            total_images: userHistory.length + MockDataStore.stats.total_images,
            positive_cases: userHistory.filter(r => r.diagnosis === 'cardiomegaly').length + MockDataStore.stats.positive_cases,
            negative_cases: userHistory.filter(r => r.diagnosis === 'normal').length + MockDataStore.stats.negative_cases,
            average_confidence: MockDataStore.stats.average_confidence
        };
    },

    // Reports
    getReports: async function() {
        await this.simulateDelay(800);
        return MockDataStore.reports;
    },

    getReportStats: async function() {
        await this.simulateDelay(500);
        return {
            total_reports: MockDataStore.stats.total_reports,
            urgent_reports: MockDataStore.stats.urgent_reports,
            normal_reports: MockDataStore.stats.normal_reports,
            this_month_reports: Math.floor(Math.random() * 20) + 5
        };
    },

    // Chat
    sendChatMessage: async function(message, sessionId, language = 'ar') {
        // Simulate typing delay
        await new Promise(resolve => setTimeout(resolve, 1000 + Math.random() * 2000));

        const responses = language === 'ar' ? MockDataStore.chatResponsesAr : MockDataStore.chatResponsesEn;
        const lowerMessage = message.toLowerCase();

        let response;

        if (lowerMessage.includes('cardiomegaly') || lowerMessage.includes('تضخم') || lowerMessage.includes('heart') || lowerMessage.includes('enlarged')) {
            response = responses.cardiomegaly[Math.floor(Math.random() * responses.cardiomegaly.length)];
        } else if (lowerMessage.includes('symptom') || lowerMessage.includes('أعراض') || lowerMessage.includes('pain') || lowerMessage.includes('chest')) {
            response = responses.symptoms[Math.floor(Math.random() * responses.symptoms.length)];
        } else if (lowerMessage.includes('prevention') || lowerMessage.includes('وقاية') || lowerMessage.includes('prevent') || lowerMessage.includes('healthy')) {
            response = responses.prevention[Math.floor(Math.random() * responses.prevention.length)];
        } else if (lowerMessage.includes('test') || lowerMessage.includes('فحص') || lowerMessage.includes('ecg') || lowerMessage.includes('scan')) {
            response = responses.test[Math.floor(Math.random() * responses.test.length)];
        } else {
            response = responses.default[Math.floor(Math.random() * responses.default.length)];
        }

        return response;
    },

    createChatSession: async function() {
        await this.simulateDelay(500);
        const sessionId = `session_${Date.now()}`;
        MockDataStore.chatSessions.push({
            session_id: sessionId,
            created_at: new Date().toISOString(),
            messages: []
        });
        return sessionId;
    }
};

// ==================== Utility Functions ====================
const Utils = {
    // Show notification
    showNotification: function(message, type = 'info') {
        const colors = {
            success: '#10B981',
            error: '#EF4444',
            warning: '#F59E0B',
            info: '#3B82F6'
        };

        // Create notification element
        const notification = document.createElement('div');
        notification.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: ${colors[type]};
            color: white;
            padding: 16px 24px;
            border-radius: 12px;
            box-shadow: 0 10px 40px rgba(0,0,0,0.2);
            z-index: 10000;
            animation: slideIn 0.3s ease;
            font-family: 'Cairo', system-ui, sans-serif;
        `;
        notification.textContent = message;

        document.body.appendChild(notification);

        setTimeout(() => {
            notification.style.animation = 'slideOut 0.3s ease';
            setTimeout(() => notification.remove(), 300);
        }, 3000);
    },

    // Format date
    formatDate: function(dateString, language = 'ar') {
        const date = new Date(dateString);
        const options = language === 'ar' ? 
            { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' } :
            { year: 'numeric', month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' };
        return date.toLocaleDateString(language === 'ar' ? 'ar-SA' : 'en-US', options);
    },

    // Check auth and redirect
    requireAuth: function(redirectUrl = 'login.html') {
        if (!SessionManager.isAuthenticated()) {
            window.location.href = redirectUrl;
            return false;
        }
        return true;
    },

    // Get current language from URL
    getCurrentLanguage: function() {
        const path = window.location.pathname;
        return path.includes('_en.html') ? 'en' : 'ar';
    }
};

// Add CSS animations for notifications
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from { transform: translateX(100%); opacity: 0; }
        to { transform: translateX(0); opacity: 1; }
    }
    @keyframes slideOut {
        from { transform: translateX(0); opacity: 1; }
        to { transform: translateX(100%); opacity: 0; }
    }
`;
document.head.appendChild(style);

// Export for global use
window.MockAPI = MockAPI;
window.SessionManager = SessionManager;
window.MockDataStore = MockDataStore;
window.Utils = Utils;

console.log('✅ Mock Services Loaded - Preview/Demo Mode Active');
console.log('📊 Demo Credentials:');
console.log('   User: user@example.com / password123');
console.log('   Doctor: doctor@example.com / doctor123');
console.log('   Admin: admin@example.com / admin123');
