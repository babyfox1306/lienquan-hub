import adsenseConfig from '../lib/adsense';

const AffiliateLink = ({ href, children, className = '', icon = '' }) => (
  <a 
    href={href} 
    target="_blank" 
    rel="noopener noreferrer"
    className={`btn btn-sm w-full ${className}`}
  >
    {icon && <span className="mr-2">{icon}</span>}
    {children}
  </a>
);

export const AffiliateSection = ({ className = '' }) => {
  return (
    <div className={`affiliate-section ${className}`}>
      <div className="card bg-base-100 shadow-xl">
        <div className="card-body">
          <h3 className="card-title text-lg">💰 Kiếm tiền cùng Liên Quân</h3>
          <div className="space-y-3">
            <AffiliateLink 
              href={adsenseConfig.affiliate.topUp}
              className="btn-primary"
              icon="💎"
            >
              Nạp Quân Huy
            </AffiliateLink>
            <AffiliateLink 
              href={adsenseConfig.affiliate.account}
              className="btn-secondary"
              icon="🎮"
            >
              Mua Acc VIP
            </AffiliateLink>
            <AffiliateLink 
              href={adsenseConfig.affiliate.tools}
              className="btn-accent"
              icon="🛠️"
            >
              Tools & Apps
            </AffiliateLink>
          </div>
          <div className="text-xs text-base-content/50 mt-2">
            Hỗ trợ website bằng cách mua qua link của chúng tôi
          </div>
        </div>
      </div>
    </div>
  );
};

export const TopUpSection = ({ className = '' }) => (
  <div className={`topup-section ${className}`}>
    <div className="card bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-xl">
      <div className="card-body text-center">
        <h3 className="card-title justify-center text-xl">💎 Nạp Quân Huy</h3>
        <p className="text-sm opacity-90">Nạp quân huy nhanh chóng và an toàn</p>
        <AffiliateLink 
          href={adsenseConfig.affiliate.topUp}
          className="btn-white text-purple-600 mt-3"
          icon="⚡"
        >
          Nạp ngay
        </AffiliateLink>
      </div>
    </div>
  </div>
);

export const AccountSection = ({ className = '' }) => (
  <div className={`account-section ${className}`}>
    <div className="card bg-gradient-to-r from-blue-500 to-cyan-500 text-white shadow-xl">
      <div className="card-body text-center">
        <h3 className="card-title justify-center text-xl">🎮 Acc VIP</h3>
        <p className="text-sm opacity-90">Tài khoản VIP với nhiều tướng và skin</p>
        <AffiliateLink 
          href={adsenseConfig.affiliate.account}
          className="btn-white text-blue-600 mt-3"
          icon="⭐"
        >
          Xem ngay
        </AffiliateLink>
      </div>
    </div>
  </div>
);

export default AffiliateSection;
