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
var ecpack = ecpack || {};

/**
 * @constructor
 */
ecpack.T_EC_SETBUSINESS_RQ = function() {
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
 * @returns {ecpack.T_EC_SETBUSINESS_RQ}
 */
ecpack.T_EC_SETBUSINESS_RQ.prototype.__init = function(i, bb) {
  this.bb_pos = i;
  this.bb = bb;
  return this;
};

/**
 * @param {flatbuffers.ByteBuffer} bb
 * @param {ecpack.T_EC_SETBUSINESS_RQ=} obj
 * @returns {ecpack.T_EC_SETBUSINESS_RQ}
 */
ecpack.T_EC_SETBUSINESS_RQ.getRootAsT_EC_SETBUSINESS_RQ = function(bb, obj) {
  return (obj || new ecpack.T_EC_SETBUSINESS_RQ).__init(bb.readInt32(bb.position()) + bb.position(), bb);
};

/**
 * @param {commonpack.S_RQ_HEAD=} obj
 * @returns {commonpack.S_RQ_HEAD}
 */
ecpack.T_EC_SETBUSINESS_RQ.prototype.sRqHead = function(obj) {
  var offset = this.bb.__offset(this.bb_pos, 4);
  return offset ? (obj || new commonpack.S_RQ_HEAD).__init(this.bb_pos + offset, this.bb) : null;
};

/**
 * @returns {flatbuffers.Long}
 */
ecpack.T_EC_SETBUSINESS_RQ.prototype.sellerId = function() {
  var offset = this.bb.__offset(this.bb_pos, 6);
  return offset ? this.bb.readUint64(this.bb_pos + offset) : this.bb.createLong(0, 0);
};

/**
 * @returns {number}
 */
ecpack.T_EC_SETBUSINESS_RQ.prototype.sellerType = function() {
  var offset = this.bb.__offset(this.bb_pos, 8);
  return offset ? this.bb.readInt32(this.bb_pos + offset) : 0;
};

/**
 * @param {flatbuffers.Encoding=} optionalEncoding
 * @returns {string|Uint8Array}
 */
ecpack.T_EC_SETBUSINESS_RQ.prototype.sellerAvatar = function(optionalEncoding) {
  var offset = this.bb.__offset(this.bb_pos, 10);
  return offset ? this.bb.__string(this.bb_pos + offset, optionalEncoding) : null;
};

/**
 * @param {flatbuffers.Encoding=} optionalEncoding
 * @returns {string|Uint8Array}
 */
ecpack.T_EC_SETBUSINESS_RQ.prototype.sellerName = function(optionalEncoding) {
  var offset = this.bb.__offset(this.bb_pos, 12);
  return offset ? this.bb.__string(this.bb_pos + offset, optionalEncoding) : null;
};

/**
 * @param {flatbuffers.Encoding=} optionalEncoding
 * @returns {string|Uint8Array}
 */
ecpack.T_EC_SETBUSINESS_RQ.prototype.sellerUrl = function(optionalEncoding) {
  var offset = this.bb.__offset(this.bb_pos, 14);
  return offset ? this.bb.__string(this.bb_pos + offset, optionalEncoding) : null;
};

/**
 * @param {flatbuffers.Builder} builder
 */
ecpack.T_EC_SETBUSINESS_RQ.startT_EC_SETBUSINESS_RQ = function(builder) {
  builder.startObject(6);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {flatbuffers.Offset} sRqHeadOffset
 */
ecpack.T_EC_SETBUSINESS_RQ.addSRqHead = function(builder, sRqHeadOffset) {
  builder.addFieldStruct(0, sRqHeadOffset, 0);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {flatbuffers.Long} sellerId
 */
ecpack.T_EC_SETBUSINESS_RQ.addSellerId = function(builder, sellerId) {
  builder.addFieldInt64(1, sellerId, builder.createLong(0, 0));
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {number} sellerType
 */
ecpack.T_EC_SETBUSINESS_RQ.addSellerType = function(builder, sellerType) {
  builder.addFieldInt32(2, sellerType, 0);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {flatbuffers.Offset} sellerAvatarOffset
 */
ecpack.T_EC_SETBUSINESS_RQ.addSellerAvatar = function(builder, sellerAvatarOffset) {
  builder.addFieldOffset(3, sellerAvatarOffset, 0);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {flatbuffers.Offset} sellerNameOffset
 */
ecpack.T_EC_SETBUSINESS_RQ.addSellerName = function(builder, sellerNameOffset) {
  builder.addFieldOffset(4, sellerNameOffset, 0);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {flatbuffers.Offset} sellerUrlOffset
 */
ecpack.T_EC_SETBUSINESS_RQ.addSellerUrl = function(builder, sellerUrlOffset) {
  builder.addFieldOffset(5, sellerUrlOffset, 0);
};

/**
 * @param {flatbuffers.Builder} builder
 * @returns {flatbuffers.Offset}
 */
ecpack.T_EC_SETBUSINESS_RQ.endT_EC_SETBUSINESS_RQ = function(builder) {
  var offset = builder.endObject();
  return offset;
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {flatbuffers.Offset} offset
 */
ecpack.T_EC_SETBUSINESS_RQ.finishT_EC_SETBUSINESS_RQBuffer = function(builder, offset) {
  builder.finish(offset);
};

// Exports for Node.js and RequireJS
this.commonpack = commonpack;
this.ecpack = ecpack;
