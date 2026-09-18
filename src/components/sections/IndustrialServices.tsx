import React from 'react';
import { View, Text, StyleSheet, ScrollView, Dimensions, Platform } from 'react-native';

const { width } = Dimensions.get('window');
const isMobile = width < 768;

const DESIGN_TOKENS = {
  NAVY_BLUE: '#04364A',
  ORANGE: '#E85F0A',
  TEXT_DARK: '#1A1A1A',
  CANVAS_BG: '#F9F7F5',
  WHITE: '#FFFFFF',
};

interface ServiceItem {
  title: string;
  description: string;
  bullets?: string[];
}

const SERVICES_CONTENT: ServiceItem[] = [
  {
    title: '1. OFFSET PRINTING',
    description: 'We serve all types of corporate and industrial printing services, including high-volume production of:',
    bullets: [
      'Inward, Outward, and Vehicle Log Books',
      'Employee Gate Pass and Visitor Management Books',
      'Custom Company Letterheads',
      'Professional Visiting Cards',
    ],
  },
  {
    title: '2. LASER ENGRAVING & UV PRINTING',
    description: 'Precision automated laser engraving, cutting, and durable UV surface printing across a wide variety of industrial mediums:',
    bullets: [
      'Wooden & MDF Components',
      'Acrylic Displays & Signage',
      'Stainless Steel (SS) & Mild Steel (MS) Plates',
      'Industrial Rubber & Leather Products',
      'Glassware and Precision Panels',
    ],
  },
  {
    title: '3. 3D PRINTING AND PROTOTYPING',
    description: 'We provide 3D printing services in variety of material like PLA/PETG/ABS/ASA:',
    bullets: [
      'Product Prototyping',
      'Custom 3D printing',
    ],
  },
  {
    title: '4. LABELING & INDUSTRIAL BARCODES',
    description: 'Barcode generation and structural product labeling solutions engineered to optimize tracking, inventory accuracy, and modern warehouse management systems.',
  },
  {
    title: '5. STATIONERY SUPPLIES',
    description: 'We deal in all types of industrial stationery material supply.',
    bullets: [
      'Variety of printing Papers',
      'High-Visibility Highlighters',
      'Executive Writing Pads & Notebooks',
      'Binder Files & Document Storage Solutions',
    ],
  },
  {
    title: '6. PACKAGING MATERIAL SOLUTIONS',
    description: 'Comprehensive, heavy-duty industrial packaging options designed to safeguard products during handling and long-distance logistics:',
    bullets: [
      'Shock-Absorbent Bubble Rolls',
      'High-Strength Shrink Wraps',
      'Heavy-Duty BOPP Industrial Tapes',
    ],
  },
  {
    title: '7. HOUSEKEEPING SOLUTIONS',
    description: 'Turnkey fulfillment services providing high-efficiency facilities maintenance inventory, specialized cleaning chemicals, and housekeeping solutions.',
  },
  {
    title: '8. PANTRY MATERIAL FULFILLMENT',
    description: 'Premium pantry essentials and automated replenishment inventory tailored to keep your workplace running smoothly:',
    bullets: [
      'Premium Tea Bags & Coffee Blends',
      'Institutional Milk Powder',
      'Processed Sugar Cubes & Sweeteners',
    ],
  },
  {
    title: '9. COMMERCIAL PAINTING WORK',
    description: 'Professional, long-lasting surface coatings executed by certified industrial painters:',
    bullets: [
      'Office & Facility Wall Painting',
      'Pathway and Storage Bay Floor Painting',
      'Heavy-Wear Epoxy Industrial Floor Coatings',
      'Corrosion-Resistant Factory Machine Painting',
    ],
  },
  {
    title: '10. CUSTOM CORPORATE GIFTING',
    description: 'End-to-end design and customization for corporate merchandise arrays, branding, and promotional gifting:',
    bullets: [
      'New Hire Executive Welcome Kits',
      'Safety Week Commemoration Gifts & Apparel',
      'Corporate Exhibition & Seminar Giveaways',
      'Special Family Function & Milestone Celebrations',
    ],
  },
  {
    title: '11. INDUSTRIAL SAFETY EQUIPMENT (PPE)',
    description: 'Comprehensive, multi-hazard personal protective equipment compliant with strict industrial safety norms:',
    bullets: [
      'Anti-Fog Protection Goggles',
      'Impact-Resistant Hardhat Helmets',
      'Steel-Toe Industrial Safety Shoes',
      'High-Visibility Reflective Safety Jackets',
      'High-Axe Fall Protection Safety Belts',
      'Featured Brands Inventory: 3M, Venus, Hipro, Karam.',
    ],
  },
];

const IndustrialServices: React.FC = () => {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
      <View style={styles.grid}>
        {SERVICES_CONTENT.map((service, index) => (
          <View key={index} style={styles.card}>
            <View style={styles.iconPlaceholder}>
              <View style={styles.iconCircle} />
            </View>
            <Text style={styles.cardTitle}>{service.title}</Text>
            <Text style={styles.cardDescription}>{service.description}</Text>
            {service.bullets && (
              <View style={styles.bulletList}>
                {service.bullets.map((bullet, bIndex) => (
                  <View key={bIndex} style={styles.bulletItem}>
                    <Text style={styles.bulletPoint}>•</Text>
                    <Text style={styles.bulletText}>{bullet}</Text>
                  </View>
                ))}
              </View>
            )}
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: DESIGN_TOKENS.CANVAS_BG,
    flex: 1,
  },
  contentContainer: {
    padding: 20,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
    gap: 20,
  },
  card: {
    backgroundColor: DESIGN_TOKENS.WHITE,
    borderRadius: 12,
    padding: 24,
    width: Platform.OS === 'web' ? (isMobile ? '100%' : '23.5%') : '100%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 3,
    marginBottom: 10,
    borderTopWidth: 4,
    borderTopColor: DESIGN_TOKENS.NAVY_BLUE,
  },
  iconPlaceholder: {
    marginBottom: 16,
  },
  iconCircle: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: DESIGN_TOKENS.ORANGE,
    opacity: 0.9,
  },
  cardTitle: {
    color: DESIGN_TOKENS.NAVY_BLUE,
    fontSize: 18,
    fontWeight: '800',
    marginBottom: 12,
    letterSpacing: 0.5,
  },
  cardDescription: {
    color: DESIGN_TOKENS.TEXT_DARK,
    fontSize: 15,
    lineHeight: 22,
    marginBottom: 12,
  },
  bulletList: {
    marginTop: 8,
  },
  bulletItem: {
    flexDirection: 'row',
    marginBottom: 6,
    paddingRight: 10,
  },
  bulletPoint: {
    color: DESIGN_TOKENS.ORANGE,
    fontSize: 18,
    marginRight: 8,
    fontWeight: 'bold',
  },
  bulletText: {
    color: DESIGN_TOKENS.TEXT_DARK,
    fontSize: 14,
    lineHeight: 20,
    flex: 1,
  },
});

export default IndustrialServices;
