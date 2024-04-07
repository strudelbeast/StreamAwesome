export class FontAwesomeIcon {
  static readonly fontVersionInfo: {
    fontFamilyBase: string
    fontVersion: string
    fontLicense: 'Free' | 'Pro'
  } = {
    fontFamilyBase: 'Font Awesome 6',
    fontVersion: '6.4.2',
    fontLicense: 'Pro'
  }

  constructor(
    public readonly id: string,
    public readonly label: string,
    public readonly unicode: string,
    public readonly styles: {
      readonly free: FontAwesomeFamilyStyle[]
      readonly pro: FontAwesomeFamilyStyle[]
    }
  ) {}

  public isFree(): boolean {
    return this.styles.free.length > 0
  }

  public isPro(): boolean {
    return this.styles.pro.length > 0
  }

  public isBrand(): boolean {
    const brandKeyword = 'brands'

    return (
      this.styles.free.some((entry) => entry.style === brandKeyword) ||
      this.styles.pro.some((entry) => entry.style === brandKeyword)
    )
  }

  static getFontFamilySuffix(familyStyle: FontAwesomeFamilyStyle): FontFamilySuffix {
    if (familyStyle.style === 'brands') {
      return 'Brands'
    }

    switch (familyStyle.family) {
      case 'classic':
        return this.fontVersionInfo.fontLicense
      case 'duotone':
        return 'Duotone'
      case 'sharp':
        return 'Sharp'
      default:
        return this.fontVersionInfo.fontLicense
    }
  }

  static getFontFamily(fontFamilySuffix: FontFamilySuffix): FontAwesomeFamily {
    switch (fontFamilySuffix) {
      case 'Free':
        return 'classic'
      case 'Pro':
        return 'classic'
      case 'Duotone':
        return 'duotone'
      case 'Sharp':
        return 'sharp'
      case 'Brands':
        return 'classic'
      default:
        return 'classic'
    }
  }

  static getFontWeight(style: FontAwesomeStyle): FontWeight {
    switch (style) {
      case 'solid':
        return 900
      case 'regular':
        return 400
      case 'light':
        return 300
      case 'thin':
        return 100
      case 'brands':
        return 400
      default:
        return 900
    }
  }

  static getFontAwesomeStyle(fontWeight: FontWeight): FontAwesomeStyle {
    switch (fontWeight) {
      case 100:
        return 'thin'
      case 300:
        return 'light'
      case 400:
        return 'regular'
      case 900:
        return 'solid'
    }
  }
}

export interface FontAwesomeFamilyStyle {
  readonly family: FontAwesomeFamily
  readonly style: FontAwesomeStyle
}

export const FontAwesomeFamilyKeys = ['classic', 'sharp', 'duotone']
export const FontAwesomeStyleKeys = ['solid', 'regular', 'light', 'thin', 'brands']
export const FontFamilySuffixKeys = ['Free', 'Pro', 'Duotone', 'Sharp', 'Brands']

export type FontAwesomeFamily = (typeof FontAwesomeFamilyKeys)[number]
export type FontAwesomeStyle = (typeof FontAwesomeStyleKeys)[number]
export type FontFamilySuffix = (typeof FontFamilySuffixKeys)[number]
export type FontWeight = 100 | 300 | 400 | 900
