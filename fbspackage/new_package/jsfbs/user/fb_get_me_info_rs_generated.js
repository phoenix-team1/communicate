// automatically generated by the FlatBuffers compiler, do not modify

/**
 * @const
 * @namespace
 */
var commonpack = commonpack || {};

/**
 * @const
 * @namespace
 */
var userpack = userpack || {};

/**
 * @constructor
 */
userpack.T_GET_ME_INFO_RS = function() {
  /**
   * @type {flatbuffers.ByteBuffer}
   */
  this.bb = null;

  /**
   * @type {number}
   */
  this.bb_pos = 0;
};

/**
 * @param {number} i
 * @param {flatbuffers.ByteBuffer} bb
 * @returns {userpack.T_GET_ME_INFO_RS}
 */
userpack.T_GET_ME_INFO_RS.prototype.__init = function(i, bb) {
  this.bb_pos = i;
  this.bb = bb;
  return this;
};

/**
 * @param {flatbuffers.ByteBuffer} bb
 * @param {userpack.T_GET_ME_INFO_RS=} obj
 * @returns {userpack.T_GET_ME_INFO_RS}
 */
userpack.T_GET_ME_INFO_RS.getRootAsT_GET_ME_INFO_RS = function(bb, obj) {
  return (obj || new userpack.T_GET_ME_INFO_RS).__init(bb.readInt32(bb.position()) + bb.position(), bb);
};

/**
 * @param {commonpack.S_RS_HEAD=} obj
 * @returns {commonpack.S_RS_HEAD}
 */
userpack.T_GET_ME_INFO_RS.prototype.sRsHead = function(obj) {
  var offset = this.bb.__offset(this.bb_pos, 4);
  return offset ? (obj || new commonpack.S_RS_HEAD).__init(this.bb_pos + offset, this.bb) : null;
};

/**
 * @param {flatbuffers.Encoding=} optionalEncoding
 * @returns {string|Uint8Array}
 */
userpack.T_GET_ME_INFO_RS.prototype.token = function(optionalEncoding) {
  var offset = this.bb.__offset(this.bb_pos, 6);
  return offset ? this.bb.__string(this.bb_pos + offset, optionalEncoding) : null;
};

/**
 * @param {flatbuffers.Encoding=} optionalEncoding
 * @returns {string|Uint8Array}
 */
userpack.T_GET_ME_INFO_RS.prototype.verification = function(optionalEncoding) {
  var offset = this.bb.__offset(this.bb_pos, 8);
  return offset ? this.bb.__string(this.bb_pos + offset, optionalEncoding) : null;
};

/**
 * @returns {flatbuffers.Long}
 */
userpack.T_GET_ME_INFO_RS.prototype.userId = function() {
  var offset = this.bb.__offset(this.bb_pos, 10);
  return offset ? this.bb.readUint64(this.bb_pos + offset) : this.bb.createLong(0, 0);
};

/**
 * @param {flatbuffers.Encoding=} optionalEncoding
 * @returns {string|Uint8Array}
 */
userpack.T_GET_ME_INFO_RS.prototype.userName = function(optionalEncoding) {
  var offset = this.bb.__offset(this.bb_pos, 12);
  return offset ? this.bb.__string(this.bb_pos + offset, optionalEncoding) : null;
};

/**
 * @returns {flatbuffers.Long}
 */
userpack.T_GET_ME_INFO_RS.prototype.birthday = function() {
  var offset = this.bb.__offset(this.bb_pos, 14);
  return offset ? this.bb.readUint64(this.bb_pos + offset) : this.bb.createLong(0, 0);
};

/**
 * @param {flatbuffers.Encoding=} optionalEncoding
 * @returns {string|Uint8Array}
 */
userpack.T_GET_ME_INFO_RS.prototype.city = function(optionalEncoding) {
  var offset = this.bb.__offset(this.bb_pos, 16);
  return offset ? this.bb.__string(this.bb_pos + offset, optionalEncoding) : null;
};

/**
 * @param {flatbuffers.Encoding=} optionalEncoding
 * @returns {string|Uint8Array}
 */
userpack.T_GET_ME_INFO_RS.prototype.province = function(optionalEncoding) {
  var offset = this.bb.__offset(this.bb_pos, 18);
  return offset ? this.bb.__string(this.bb_pos + offset, optionalEncoding) : null;
};

/**
 * @param {flatbuffers.Encoding=} optionalEncoding
 * @returns {string|Uint8Array}
 */
userpack.T_GET_ME_INFO_RS.prototype.signature = function(optionalEncoding) {
  var offset = this.bb.__offset(this.bb_pos, 20);
  return offset ? this.bb.__string(this.bb_pos + offset, optionalEncoding) : null;
};

/**
 * @returns {flatbuffers.Long}
 */
userpack.T_GET_ME_INFO_RS.prototype.mobile = function() {
  var offset = this.bb.__offset(this.bb_pos, 22);
  return offset ? this.bb.readUint64(this.bb_pos + offset) : this.bb.createLong(0, 0);
};

/**
 * @param {flatbuffers.Encoding=} optionalEncoding
 * @returns {string|Uint8Array}
 */
userpack.T_GET_ME_INFO_RS.prototype.nickName = function(optionalEncoding) {
  var offset = this.bb.__offset(this.bb_pos, 24);
  return offset ? this.bb.__string(this.bb_pos + offset, optionalEncoding) : null;
};

/**
 * @returns {number}
 */
userpack.T_GET_ME_INFO_RS.prototype.sex = function() {
  var offset = this.bb.__offset(this.bb_pos, 26);
  return offset ? this.bb.readInt8(this.bb_pos + offset) : 0;
};

/**
 * @param {flatbuffers.Encoding=} optionalEncoding
 * @returns {string|Uint8Array}
 */
userpack.T_GET_ME_INFO_RS.prototype.mail = function(optionalEncoding) {
  var offset = this.bb.__offset(this.bb_pos, 28);
  return offset ? this.bb.__string(this.bb_pos + offset, optionalEncoding) : null;
};

/**
 * @param {flatbuffers.Builder} builder
 */
userpack.T_GET_ME_INFO_RS.startT_GET_ME_INFO_RS = function(builder) {
  builder.startObject(13);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {flatbuffers.Offset} sRsHeadOffset
 */
userpack.T_GET_ME_INFO_RS.addSRsHead = function(builder, sRsHeadOffset) {
  builder.addFieldStruct(0, sRsHeadOffset, 0);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {flatbuffers.Offset} tokenOffset
 */
userpack.T_GET_ME_INFO_RS.addToken = function(builder, tokenOffset) {
  builder.addFieldOffset(1, tokenOffset, 0);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {flatbuffers.Offset} verificationOffset
 */
userpack.T_GET_ME_INFO_RS.addVerification = function(builder, verificationOffset) {
  builder.addFieldOffset(2, verificationOffset, 0);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {flatbuffers.Long} userId
 */
userpack.T_GET_ME_INFO_RS.addUserId = function(builder, userId) {
  builder.addFieldInt64(3, userId, builder.createLong(0, 0));
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {flatbuffers.Offset} userNameOffset
 */
userpack.T_GET_ME_INFO_RS.addUserName = function(builder, userNameOffset) {
  builder.addFieldOffset(4, userNameOffset, 0);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {flatbuffers.Long} birthday
 */
userpack.T_GET_ME_INFO_RS.addBirthday = function(builder, birthday) {
  builder.addFieldInt64(5, birthday, builder.createLong(0, 0));
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {flatbuffers.Offset} cityOffset
 */
userpack.T_GET_ME_INFO_RS.addCity = function(builder, cityOffset) {
  builder.addFieldOffset(6, cityOffset, 0);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {flatbuffers.Offset} provinceOffset
 */
userpack.T_GET_ME_INFO_RS.addProvince = function(builder, provinceOffset) {
  builder.addFieldOffset(7, provinceOffset, 0);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {flatbuffers.Offset} signatureOffset
 */
userpack.T_GET_ME_INFO_RS.addSignature = function(builder, signatureOffset) {
  builder.addFieldOffset(8, signatureOffset, 0);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {flatbuffers.Long} mobile
 */
userpack.T_GET_ME_INFO_RS.addMobile = function(builder, mobile) {
  builder.addFieldInt64(9, mobile, builder.createLong(0, 0));
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {flatbuffers.Offset} nickNameOffset
 */
userpack.T_GET_ME_INFO_RS.addNickName = function(builder, nickNameOffset) {
  builder.addFieldOffset(10, nickNameOffset, 0);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {number} sex
 */
userpack.T_GET_ME_INFO_RS.addSex = function(builder, sex) {
  builder.addFieldInt8(11, sex, 0);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {flatbuffers.Offset} mailOffset
 */
userpack.T_GET_ME_INFO_RS.addMail = function(builder, mailOffset) {
  builder.addFieldOffset(12, mailOffset, 0);
};

/**
 * @param {flatbuffers.Builder} builder
 * @returns {flatbuffers.Offset}
 */
userpack.T_GET_ME_INFO_RS.endT_GET_ME_INFO_RS = function(builder) {
  var offset = builder.endObject();
  return offset;
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {flatbuffers.Offset} offset
 */
userpack.T_GET_ME_INFO_RS.finishT_GET_ME_INFO_RSBuffer = function(builder, offset) {
  builder.finish(offset);
};

// Exports for Node.js and RequireJS
this.commonpack = commonpack;
this.userpack = userpack;